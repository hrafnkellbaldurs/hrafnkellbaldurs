import React from 'react';
import classNames from 'classnames';

import { SkillType } from '@/fragments/skills';
import { SimpleImage } from '@/types';
import { SkillLevelBanner } from '@/features/skill-grid-feature/SkillLevelBanner';
import { Link } from '@/components/Link';
import { ReactComponent as LinkIcon } from '@/assets/icons/link.svg';
import { createGlobalLocalClassnames } from '@/scripts/utils';

import type { ModalContentComponentProps } from '../ModalRoot';

import * as styles from './SkillModalContent.module.scss';

export type SkillModalContentType = {
  name: SkillType['name'];
  type: SkillType['type'];
  description: SkillType['description'];
  startDate: SkillType['startDate'];
  endDate: SkillType['endDate'];
  logo: SimpleImage;
  rating: SkillType['rating'];
  skillLevel: SkillType['skillLevel'];
  link: SkillType['link'];
  years: SkillType['years'];
};

export type SkillModalContentProps =
  ModalContentComponentProps<SkillModalContentType>;

export const SkillModalContent: React.FC<SkillModalContentProps> = (props) => {
  const { content, titleId, descriptionId, className } = props;

  const { name, description, logo, link, skillLevel, years } = content ?? {};

  return (
    <div
      className={classNames(
        createGlobalLocalClassnames(styles, `SkillModal`),
        className,
      )}
    >
      <div className="logoContainer">
        <img className="logo" src={logo?.src ?? ``} alt={logo?.label ?? ``} />
      </div>
      <h1 id={titleId} className="name">
        {name}
      </h1>
      <p id={descriptionId} className="description">
        {description}
      </p>
      <Link
        to={link ?? ``}
        className="homepage-link button button-small icon-right"
      >
        <span>Open homepage</span>
        <LinkIcon />
      </Link>
      <SkillLevelBanner skillLevel={skillLevel} years={years} />
    </div>
  );
};
