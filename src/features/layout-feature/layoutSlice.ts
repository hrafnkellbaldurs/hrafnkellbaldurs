import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SECTION_ID, SECTION_IDS } from '@/constants';
import { createHashHref } from '@/scripts/utils';

import type { RootState } from '@/store';

export type NavItem = {
  id: SECTION_ID;
  href: string;
  text: string;
};

const initialNavItems = [
  {
    id: SECTION_IDS.HOME,
    href: createHashHref(SECTION_IDS.HOME),
    text: `Home`,
  },
  {
    id: SECTION_IDS.ABOUT,
    href: createHashHref(SECTION_IDS.ABOUT),
    text: `About`,
  },
  {
    id: SECTION_IDS.PORTFOLIO,
    href: createHashHref(SECTION_IDS.PORTFOLIO),
    text: `Portfolio`,
  },
  {
    id: SECTION_IDS.RESUME,
    href: createHashHref(SECTION_IDS.RESUME),
    text: `Resume`,
  },
];

interface LayoutState {
  currentNavItemId: NavItem['id'] | null;
  navItems: NavItem[];
}

const initialState: LayoutState = {
  currentNavItemId: SECTION_IDS.HOME,
  navItems: initialNavItems,
};

// Slice
const layoutSlice = createSlice({
  name: `layout`,
  initialState,
  reducers: {
    navItemSelected: (
      draftState,
      action: PayloadAction<{ navItemId: NavItem['id'] }>,
    ) => {
      const { payload } = action;
      draftState.currentNavItemId = payload.navItemId;
    },
  },
});

// Reducers
export const { reducer: layoutReducer } = layoutSlice;

// Actions
export const { navItemSelected } = layoutSlice.actions;

// Selectors
export const selectCurrentNavItemId = (
  state: RootState,
): LayoutState['currentNavItemId'] => state.layout.currentNavItemId;
export const selectNavItems = (state: RootState): LayoutState['navItems'] =>
  state.layout.navItems;
