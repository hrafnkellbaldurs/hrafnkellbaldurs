import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import * as R from 'ramda';
import classnames from 'classnames';

import { isHome } from '@/scripts/utils';

import * as styles from './Link.module.scss';

const onInternalClick = (
  { smoothScroll }: { smoothScroll?: boolean },
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  if (smoothScroll && isHome()) {
    e.preventDefault();
    const target = e.currentTarget.hash.split(`#`)[1];
    const targetNode = document.getElementById(target);
    if (targetNode) {
      scrollIntoView(targetNode, {
        scrollMode: `always`,
        block: `start`,
        inline: `start`,
        behavior: `smooth`,
      }).then(() => {
        window.location.hash = target;
      });
    }
  }
};

type CustomGatsbyLinkProps = Omit<GatsbyLinkProps<unknown>, 'ref'>;

export type LinkProps = CustomGatsbyLinkProps & {
  /**
   * If scroll should be smooth
   */
  smoothScroll?: boolean;
  /**
   * If link should be displayed as disabled (uses css)
   */
  disabled?: boolean;
};

export const Link: React.FC<LinkProps> = (props) => {
  // Since DOM elements <a> cannot receive activeClassName,
  // destructure the prop here and pass it only to GatsbyLink
  const {
    activeClassName,
    children,
    to,
    smoothScroll = false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick = () => {},
    className,
    disabled,
    ...other
  } = props;

  // Assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Tests if path ends with a dot file extension
  const file = /\.[0-9a-z]+$/i.test(to);

  const common: {
    props: { className?: string };
    onClickHandler: React.DOMAttributes<HTMLAnchorElement>['onClick'];
  } = {
    props: {
      className: classnames(className, styles.Link, {
        [styles.disabled]: disabled,
      }),
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClickHandler: () => {},
  };

  // Use Gatsby Link for internal links, and <a> for others
  if (internal && !file) {
    const onClickHandler: React.DOMAttributes<HTMLAnchorElement>['onClick'] = (
      e,
    ) => {
      common?.onClickHandler?.(e);
      onInternalClick({ smoothScroll }, e);
      onClick(e);
    };

    const gatsbyLinkProps: CustomGatsbyLinkProps = {
      to,
      onClick: onClickHandler,
      ...common.props,
      ...other,
    };

    // Bypasses react warning when activeClassName is not being used
    if (!R.isNil(activeClassName)) {
      gatsbyLinkProps.activeClassName = activeClassName;
    }

    return <GatsbyLink {...gatsbyLinkProps}>{children}</GatsbyLink>;
  }

  const onClickHandler: React.DOMAttributes<HTMLAnchorElement>['onClick'] = (
    e,
  ) => {
    common?.onClickHandler?.(e);
    onClick(e);
  };

  return (
    <a
      href={to}
      rel="noreferrer"
      target="_blank"
      onClick={onClickHandler}
      {...common.props}
      {...other}
    >
      {children}
    </a>
  );
};

export default Link;
