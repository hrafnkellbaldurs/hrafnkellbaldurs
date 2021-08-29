import classNames from 'classnames';
import React, { useState } from 'react';
import * as R from 'ramda';

import { ReactComponent as DropdownArrow } from '@/assets/icons/arrow_drop_down.svg';
import { createGlobalLocalClassnames } from '@/scripts/utils';
import { SkillType, useSkillsFragmentStaticQuery } from '@/fragments/skills';
import { useAppDispatch } from '@/store';

import { SkillBadge, SkillBadgeProps } from './SkillBadge';
import { MODAL_TYPES, showModal } from '../modal-feature';
import * as styles from './SkillGrid.module.scss';

// Sort skills by most skill level and most years
const sortSkills = R.sortWith<SkillType>([
  R.descend((x) => x.skillLevel),
  R.descend((x) => x.years),
]);

const useSkills = (): {
  top5Skills: SkillType[];
  additionalSkills: SkillType[];
} => {
  const skillsData = useSkillsFragmentStaticQuery();
  const skills = sortSkills(skillsData);

  const top5Skills = skills.filter(
    ({ rating }) => !R.isNil(rating) && rating <= 4,
  );
  const additionalSkills = skills.filter(
    ({ rating }) => R.isNil(rating) || rating > 4,
  );

  return {
    top5Skills,
    additionalSkills,
  };
};

const showSkillModal = (skillId: SkillType['id']) =>
  showModal({ contentId: skillId, type: MODAL_TYPES.SKILL });

export const SkillGrid: React.FC = () => {
  const { top5Skills, additionalSkills } = useSkills();
  const [additionalOpen, setAdditionalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const toggleAdditional = () => {
    setAdditionalOpen(!additionalOpen);
  };

  const onSkillClick: SkillBadgeProps['onClick'] = (skillBadge) => {
    dispatch(showSkillModal(skillBadge.id));
  };

  const renderSkill = ({
    id,
    logo,
    name,
    shortName,
    skillLevel,
    years,
  }: SkillType) => (
    <div key={id} className={styles.skillContainer}>
      <SkillBadge
        id={id}
        logo={logo}
        name={name}
        shortName={shortName}
        skillLevel={skillLevel}
        years={years}
        onClick={onSkillClick}
      />
    </div>
  );

  return (
    <div
      className={classNames(createGlobalLocalClassnames(styles, `SkillGrid`))}
    >
      <div className={styles.skillGroup}>
        <div className={styles.groupLabel}>Top 5</div>
        <div className={styles.skills}>{top5Skills.map(renderSkill)}</div>
      </div>

      <div className={styles.skillGroup}>
        <button
          type="button"
          className={classNames(styles.groupLabel, styles.additionalLabel)}
          onClick={toggleAdditional}
        >
          <span>Additional</span>
          <span
            className={classNames(styles.arrow, {
              [styles.up]: additionalOpen,
            })}
          >
            <DropdownArrow />
          </span>
        </button>
        <div
          className={classNames(styles.skills, styles.expandable, {
            [styles.hidden]: !additionalOpen,
          })}
        >
          {additionalSkills.map(renderSkill)}
        </div>
      </div>
    </div>
  );
};
