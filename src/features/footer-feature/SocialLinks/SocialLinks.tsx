import React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';

import { createGlobalLocalClassnames } from '@/scripts/utils';
import { Link } from '@/components/Link';
import { ReactComponent as LinkedInIcon } from '@/assets/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '@/assets/icons/github.svg';
import { ReactComponent as BitBucketIcon } from '@/assets/icons/bitbucket.svg';
import { ReactComponent as CodePenIcon } from '@/assets/icons/codepen.svg';

import * as styles from './SocialLinks.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);

type SocialLink = {
  icon: React.ComponentType;
  href: string;
};

const defaultLinks: SocialLink[] = [
  {
    icon: LinkedInIcon,
    href: `https://www.linkedin.com/in/hrafnkellbaldurs`,
  },
  {
    icon: GitHubIcon,
    href: `https://www.github.com/hrafnkellbaldurs`,
  },
  {
    icon: BitBucketIcon,
    href: `https://www.bitbucket.com/kotkarl`,
  },
  {
    icon: CodePenIcon,
    href: `https://codepen.io/kotkarl/`,
  },
];

type SocialLinkProps = {
  links?: SocialLink[];
};

export const SocialLinks: React.FC<SocialLinkProps> = ({
  links = defaultLinks,
}) => (
  <ul className={classNames(globalLocalClassnames(`SocialLinks`))}>
    {links.map(({ icon: Icon, href }) => (
      <li key={href}>
        <Link
          className={classNames(globalLocalClassnames(`socialLink`))}
          to={href}
        >
          <Icon />
        </Link>
      </li>
    ))}
  </ul>
);
