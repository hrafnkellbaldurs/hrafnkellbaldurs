/* eslint-disable no-underscore-dangle */
/*
  Created with guide from https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/

  This file is not responsible for loading any stories, but for configuring
  story rendering https://storybook.js.org/docs/react/configure/overview#configure-story-rendering.
  It's main purpose is to add global parameters https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
  and decorators https://storybook.js.org/docs/react/writing-stories/decorators
*/
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import '../src/styles/storybook/main.scss';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate.
// Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
