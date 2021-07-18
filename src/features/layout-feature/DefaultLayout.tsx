import React from 'react';

import { Header } from '@/components/Header';
import { Nav } from '@/features/nav-feature';
import { SECTION_IDS } from '@/constants';
import { getScrollbarWidth, isBrowser } from '@/scripts/utils';
import { ModalRoot } from '@/features/modal-feature';

import { NavItem } from './layoutSlice';

type DefaultLayoutProps = {
  siteTitle?: string | null;
  currentNavItemId?: NavItem['id'] | null;
  navItems: NavItem[];
};

/**
 * Updates the css variable `--scrollbar-width` with the current scrollbar width
 */
const useUpdateScrollbarWidth = () => {
  if (isBrowser()) {
    const scrollbarWidth = getScrollbarWidth();
    const root = document.documentElement;
    root.style.setProperty(`--scrollbar-width`, `${scrollbarWidth}px`);
  }
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  currentNavItemId,
  navItems,
}) => {
  useUpdateScrollbarWidth();

  return (
    <>
      <Header id={SECTION_IDS.HOME}>
        <Nav currentItemId={currentNavItemId} items={navItems} />
      </Header>
      <div className="layout-content-container">{children}</div>
      {/* <Footer /> */}
      <ModalRoot />
    </>
  );
};
