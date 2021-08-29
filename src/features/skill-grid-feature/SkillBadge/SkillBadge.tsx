/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React from 'react';

import { SimpleImage } from '@/types';

import { SkillLevelBanner } from '../SkillLevelBanner';
import * as styles from './SkillBadge.module.scss';

export type SkillBadgeProps = {
  className?: string;
  id: string;
  name?: string | null;
  shortName?: string | null;
  logo?: SimpleImage;
  onClick: (
    props: SkillBadgeProps,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  skillLevel?: number | null;
  years?: number | null;
};

export const SkillBadge: React.FC<SkillBadgeProps> = (props) => {
  const { className, onClick, name, shortName, logo, skillLevel, years } =
    props;

  const LogoImage = () => (
    <img
      className={styles.logo}
      src={logo?.src ?? ``}
      alt={logo?.label ?? ``}
    />
  );

  const FallbackImage = () => (
    <span className={styles.fallbackLogo}>{shortName}</span>
  );

  return (
    <div
      tabIndex={0}
      role="button"
      className={classNames(`skillBadge`, styles.skillBadge, className)}
      onClick={(e) => onClick(props, e)}
    >
      <div className={styles.logoContainer}>
        {logo?.src ? <LogoImage /> : <FallbackImage />}
      </div>
      <div className={classNames(`skillBadge__itemLabel`, styles.itemLabel)}>
        {name}
      </div>
      <SkillLevelBanner skillLevel={skillLevel} years={years} />
    </div>
  );
};
