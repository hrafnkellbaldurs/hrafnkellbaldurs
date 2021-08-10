import classNames from 'classnames';
import React from 'react';
import * as R from 'ramda';

import { SKILL_LEVELS } from '@/constants';
import { createPluralAmountString } from '@/scripts/utils/createPluralAmountString';

import * as styles from './SkillLevelBanner.module.scss';

const skillLevelClassMap = {
  [SKILL_LEVELS.NOVICE]: `skill-level-novice`,
  [SKILL_LEVELS.PROFICIENT]: `skill-level-proficient`,
  [SKILL_LEVELS.EXPERT]: `skill-level-expert`,
};

const skillLevelTextMap = {
  [SKILL_LEVELS.NOVICE]: `Novice`,
  [SKILL_LEVELS.PROFICIENT]: `Proficient`,
  [SKILL_LEVELS.EXPERT]: `Expert`,
};

const createYearsOfExperienceText = R.pipe(
  (years: number | null | undefined) =>
    createPluralAmountString(years ?? 0, `yr`, `yrs`, `No`, false),
  (yearsText: string) => `${yearsText} experience`,
);

export type SkillLevelBannerProps = {
  skillLevel?: number | null;
  years?: number | null;
  borderPosition?: `bottom` | `top`;
};

export const SkillLevelBanner: React.FC<SkillLevelBannerProps> = (props) => {
  const { skillLevel = 0, years = 0, borderPosition = `bottom` } = props;

  const containerProps = {
    className: classNames(
      `skillLevelBanner`,
      styles.skillLevelBanner,
      skillLevelClassMap[skillLevel ?? SKILL_LEVELS.NOVICE],
      `border-${borderPosition}`,
    ),
  };

  const yearsOfExperienceText = createYearsOfExperienceText(years);

  return (
    <div {...containerProps}>
      <div className="content-container">
        <div className="item skill-level-text">
          {skillLevelTextMap[skillLevel ?? SKILL_LEVELS.NOVICE]}
        </div>
        <div className="item bullet" />
        <div className="item years-of-experience">
          <span className="text">
            <span className="years">{years}</span>
            {` `}
            <span className="of-experience">{yearsOfExperienceText}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
