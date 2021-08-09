import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillBadge } from './SkillBadge';

export default {
  title: `Features/skill-grid/SkillBadge`,
  component: SkillBadge,
} as ComponentMeta<typeof SkillBadge>;

const Template: ComponentStory<typeof SkillBadge> = (args) => (
  <SkillBadge {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
