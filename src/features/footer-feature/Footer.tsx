import classNames from 'classnames';
import React from 'react';

import { SECTION_IDS } from '@/constants';
import { createGlobalLocalClassnames, createHashHref } from '@/scripts/utils';
import { ReactComponent as DownArrowIcon } from '@/assets/icons/arrow_drop_down.svg';
import { Link } from '@/components/Link';

import { SocialLinks } from './SocialLinks';
import * as styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const homeSectionHref = createHashHref(SECTION_IDS.HOME);

  return (
    <footer
      className={classNames(createGlobalLocalClassnames(styles, `Footer`))}
    >
      <div className={styles.goToTop}>
        <Link to={homeSectionHref} smoothScroll>
          <DownArrowIcon />
        </Link>
      </div>
      <div className="row">
        <div
          className={classNames(`twelve`, `columns`, styles.contentContainer)}
        >
          <div className={styles.socialLinksContainer}>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="row">
        <span className="icon-licence">
          Icons made by
          {` `}
          <Link to="https://smashicons.com/" title="Smashicons">
            Smashicons
          </Link>
          {` `}
          from
          {` `}
          <Link to="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>
          {` `}
          is licensed by
          {` `}
          <Link
            to="https://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </Link>
        </span>
      </div>
    </footer>
  );
};
