import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StorybookTest } from './StorybookTest';

export default {
  title: `Features/skill-grid/StorybookTest`,
  component: StorybookTest,
} as ComponentMeta<typeof StorybookTest>;

const Template: ComponentStory<typeof StorybookTest> = (args) => (
  <StorybookTest {...args} />
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
