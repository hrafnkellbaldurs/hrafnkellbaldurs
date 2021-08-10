import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillLevelBanner } from './SkillLevelBanner';

export default {
  title: `Features/skill-grid/SkillLevelBanner`,
  component: SkillLevelBanner,
  argTypes: {
    skillLevel: { control: `number` },
    years: { control: `number` },
  },
} as ComponentMeta<typeof SkillLevelBanner>;

const Template: ComponentStory<typeof SkillLevelBanner> = (args) => (
  <SkillLevelBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Novice = Template.bind({});
Novice.args = {
  skillLevel: 0,
  years: 0.5,
};

export const Proficient = Template.bind({});
Proficient.args = {
  ...Novice.args,
  skillLevel: 1,
  years: 2,
};

export const Expert = Template.bind({});
Expert.args = {
  ...Novice.args,
  skillLevel: 2,
  years: 5,
};

export const Unknown = Template.bind({});
Unknown.args = {
  ...Novice.args,
  skillLevel: 100,
  years: 5,
};

export const BorderTop = Template.bind({});
BorderTop.args = {
  borderPosition: `top`,
};
