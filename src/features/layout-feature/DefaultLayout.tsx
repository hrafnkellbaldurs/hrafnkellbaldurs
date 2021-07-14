import React from 'react';

import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';
import { SECTION_IDS } from '@/constants';
import { NavItem } from './layoutSlice';

type DefaultLayoutProps = {
  siteTitle?: string | null;
  currentNavItemId?: NavItem['id'] | null;
  navItems: NavItem[];
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  currentNavItemId,
  navItems,
}) => (
  <>
    <Header id={SECTION_IDS.HOME}>
      <Nav currentItemId={currentNavItemId} items={navItems} />
    </Header>
    <div className="layout-content-container">{children}</div>
    {/* <Footer /> */}
    {/* <ModalRoot /> */}
  </>
);
