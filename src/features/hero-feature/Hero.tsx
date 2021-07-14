import classNames from 'classnames';
import React, { useState, useRef, useCallback } from 'react';
import * as R from 'ramda';

import {
  createGlobalLocalClassnames,
  createHashHref,
  debounce,
} from '@/scripts/utils';

import { Link } from '@/components/Link';
import { ReactComponent as DownArrowIcon } from '@/assets/icons/arrow_drop_down.svg';
import { SECTION_IDS } from '@/constants';
import { useEventListener } from '@/scripts/hooks/useEventListener';

import * as styles from './Hero.module.scss';

const WINDOW_CHANGE_DEBOUNCE_DURATION = 66;

type HeroSize = {
  /**
   * Height in amount of height units
   */
  height: number;
  /**
   * Unit of size, f.ex 'px' or 'rem'
   */
  heightUnit: string;
};

const useHeroSize = (): {
  size: HeroSize;
  ref: React.RefObject<HTMLDivElement>;
} => {
  // Start with vh until we can calculate exact pixel height
  const [size, setSize] = useState<HeroSize>({ height: 95, heightUnit: `vh` });
  const ref = useRef<HTMLDivElement>(null);

  const handleWindowChange = useCallback(
    debounce(() => {
      const containerHeight: number = window.innerHeight;
      const containerScrollY: number = window.scrollY;

      const heroDiv = ref.current;
      if (heroDiv && containerScrollY <= heroDiv.offsetTop) {
        // Make hero fill out the rest of the screen
        const newHeight = containerHeight - heroDiv.offsetTop;
        setSize({ height: newHeight, heightUnit: `px` });
      }
    }, WINDOW_CHANGE_DEBOUNCE_DURATION),
    [setSize, ref],
  );

  useEventListener(`resize`, handleWindowChange, window);
  useEventListener(`scroll`, handleWindowChange, window, true);

  return {
    size,
    ref,
  };
};

export type Props = {
  className?: string;
  backgroundUrl?: string;
};

export const Hero: React.FC<Props> = ({
  backgroundUrl,
  className,
  children,
}) => {
  const { ref, size } = useHeroSize();

  const backgroundImage = R.either(R.isNil, R.isEmpty)(backgroundUrl)
    ? `none`
    : `url(${backgroundUrl})`;

  return (
    <div
      ref={ref}
      className={classNames(
        createGlobalLocalClassnames(styles, `Hero`),
        className,
      )}
      style={{ height: `${size.height}${size.heightUnit}`, backgroundImage }}
    >
      <div className="overlay" />
      <div className={classNames(`row`, styles.children)}>{children}</div>
      <Link
        className="scrolldown"
        to={createHashHref(SECTION_IDS.ABOUT)}
        smoothScroll
      >
        <DownArrowIcon />
      </Link>
    </div>
  );
};
