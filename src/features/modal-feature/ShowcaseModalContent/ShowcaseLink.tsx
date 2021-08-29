/* eslint-disable global-require */
import React from 'react';
import * as R from 'ramda';

import { Link, LinkProps } from '@/components/Link';
import classNames from 'classnames';

type LinkType = `link` | `internalLink` | `sourceCodeLink`;
const createLinkIcon = (href = ``, linkType: LinkType = `link`) => {
  let Icon = () => <span />;

  if (linkType === `link`) {
    if (R.either(R.isNil, R.isEmpty)(href)) {
      Icon = require(`@/assets/icons/broken-link.svg`).ReactComponent;
    } else {
      Icon = require(`@/assets/icons/link.svg`).ReactComponent;
    }
  } else if (linkType === `internalLink`) {
    Icon = require(`@/assets/icons/download.svg`).ReactComponent;
  } else if (linkType === `sourceCodeLink`) {
    if (R.test(/codepen/, href)) {
      // Make button icon codepen
      Icon = require(`@/assets/icons/codepen.svg`).ReactComponent;
    } else if (R.test(/github\.io/, href)) {
      // Make button icon github pages
      Icon = require(`@/assets/icons/github-pages.svg`).ReactComponent;
    } else if (R.test(/github\.com/, href)) {
      // Make button icon github
      Icon = require(`@/assets/icons/github.svg`).ReactComponent;
    } else if (R.test(/bitbucket/, href)) {
      // Make button icon github
      Icon = require(`@/assets/icons/bitbucket.svg`).ReactComponent;
    } else if (R.test(/codesandbox/, href)) {
      // Make button icon codesandbox
      Icon = require(`@/assets/icons/codesandbox.svg`).ReactComponent;
    } else if (R.test(/netlify/, href)) {
      // Make button netlify
      Icon = require(`@/assets/icons/netlify.svg`).ReactComponent;
    }
  }

  return Icon;
};

type ShowcaseLinkProps = LinkProps & {
  linkType?: LinkType;
  text?: string;
  disabled?: boolean;
};

export const ShowcaseLink: React.FC<ShowcaseLinkProps> = (props) => {
  const {
    to = ``,
    linkType,
    text,
    className,
    disabled: _disabled,
    ...rest
  } = props;

  if (R.test(/play\.google/, to)) {
    return (
      <Link to={to} className="google-play-badge">
        <img
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
        />
      </Link>
    );
  }

  let tooltip;
  let disabled = _disabled;

  if (!to) {
    // Make button disabled, (with tooltip 'coming soon' ?)
    tooltip = `Coming soon!`;
    disabled = disabled !== false;
  }

  const Icon = createLinkIcon(to, linkType);

  return (
    <Link
      to={to}
      disabled={disabled}
      title={tooltip}
      className={classNames(`button icon-right`, className)}
      {...rest}
    >
      <span>{text}</span>
      <Icon />
    </Link>
  );
};
