import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StorybookImportTest } from './StorybookImportTest';

export default {
  title: `Features/skill-grid/StorybookImportTest`,
  component: StorybookImportTest,
} as ComponentMeta<typeof StorybookImportTest>;

const Template: ComponentStory<typeof StorybookImportTest> = (args) => (
  <StorybookImportTest {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: `Some text`,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: `Button`,
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: `large`,
//   label: `Button`,
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: `small`,
//   label: `Button`,
// };
