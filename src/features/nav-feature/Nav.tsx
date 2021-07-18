import React, { useState } from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import { slide as NavMenu, Props as NavMenuProps } from 'react-burger-menu';

import { createGlobalLocalClassnames, isHome } from '@/scripts/utils';
import { Link, LinkProps } from '@/components/Link';
import { ReactComponent as BurgerIcon } from '@/assets/icons/burger_menu.svg';
import type { NavItem as NavItemType } from '@/features/layout-feature';
import * as styles from './Nav.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);

type NavItemProps = NavItemType & {
  className: string;
  currentItemId?: NavItemType['id'] | null;
  onClick: LinkProps['onClick'];
};
export const NavItem: React.FC<NavItemProps> = ({
  id,
  href,
  text,
  className,
  onClick,
  currentItemId,
}) => {
  const getCurrentClassName = () => ({
    className: classnames({
      [className]: true,
      [styles.current]: id === currentItemId,
    }),
  });

  return (
    <Link
      getProps={getCurrentClassName}
      className={className}
      activeClassName={styles.current}
      to={href}
      onClick={onClick}
      smoothScroll
    >
      {text}
    </Link>
  );
};

type NavProps = {
  currentItemId?: NavItemType['id'] | null;
  items: NavItemType[];
};

export const Nav: React.FC<NavProps> = ({ currentItemId, items }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Keep menu open state in sync with NavMenu state
  const handleMenuStateChange: NavMenuProps['onStateChange'] = ({ isOpen }) => {
    setMenuOpen(isOpen);
  };

  const onNavItemClick: NavItemProps['onClick'] = (e) => {
    if (isHome()) {
      e.preventDefault();
    }
    closeMenu();
  };

  const NavMenuClassname = `NavMenu`;

  return (
    <nav className={classnames(globalLocalClassnames(`Nav`))}>
      <div className={styles.container}>
        <div className={classnames(globalLocalClassnames(`Nav__items`))}>
          {items.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              currentItemId={currentItemId}
              className={styles.item}
              onClick={onNavItemClick}
            />
          ))}
        </div>
      </div>

      <NavMenu
        width="60%"
        customBurgerIcon={<BurgerIcon />}
        className={classnames(globalLocalClassnames(NavMenuClassname))}
        isOpen={menuOpen}
        right
        onStateChange={handleMenuStateChange}
        bodyClassName={`${NavMenuClassname}--open__Body`}
      >
        {items.map((item) => (
          <NavItem
            key={item.id}
            {...item}
            currentItemId={currentItemId}
            className={classnames(`bm-item`, styles.item)}
            onClick={onNavItemClick}
          />
        ))}
      </NavMenu>
    </nav>
  );
};
