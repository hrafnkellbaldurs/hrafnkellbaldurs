/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React from 'react';
import * as R from 'ramda';

import { SimpleImage } from '@/types';
import { createGlobalLocalClassnames } from '@/scripts/utils';

import { SkillLevelBanner } from '../SkillLevelBanner';
import * as styles from './SkillBadge.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);

export type SkillBadgeProps = {
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
  const { onClick, name, shortName, logo, skillLevel, years } = props;

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
      className={classNames(globalLocalClassnames(`SkillBadge`))}
      onClick={(e) => onClick(props, e)}
    >
      <div className={styles.logoContainer}>
        {logo?.src ? <LogoImage /> : <FallbackImage />}
      </div>
      <div className={classNames(globalLocalClassnames(`itemLabel`))}>
        {name}
      </div>
      <SkillLevelBanner skillLevel={skillLevel} years={years} />
    </div>
  );
};
