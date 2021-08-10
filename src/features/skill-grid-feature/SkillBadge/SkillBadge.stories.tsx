import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillBadge } from './SkillBadge';

export default {
  title: `Features/skill-grid/SkillBadge`,
  component: SkillBadge,
  argTypes: {
    className: { control: `text` },
    name: { control: `text` },
    shortName: { control: `text` },
    skillLevel: { control: `number` },
    years: { control: `number` },
  },
} as ComponentMeta<typeof SkillBadge>;

const Template: ComponentStory<typeof SkillBadge> = (args) => (
  <SkillBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Novice = Template.bind({});
Novice.args = {
  name: `Novice Skill`,
  shortName: `S`,
  logo: {
    label: `Logo`,
    src: `https://via.placeholder.com/20`,
  },
  skillLevel: 0,
  years: 0.5,
};

export const Proficient = Template.bind({});
Proficient.args = {
  ...Novice.args,
  name: `Pro Skill`,
  skillLevel: 1,
  years: 2,
};

export const Expert = Template.bind({});
Expert.args = {
  ...Novice.args,
  name: `Expert Skill`,
  skillLevel: 2,
  years: 5,
};

export const OnClick = Template.bind({});
OnClick.args = {
  ...Expert.args,
  name: `On click`,
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert(`click`);
  },
};
