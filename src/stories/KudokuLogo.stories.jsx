import React from 'react';

import { KudokuLogo } from '../primitives/KudokuLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Primitives/Kudoku Logo',
  component: KudokuLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'variant1', 'variant2'],
      control: { type: 'radio' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <KudokuLogo {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Variant1 = Template.bind({});
Variant1.args = {
  variant: 'variant1',
};

export const Variant2 = Template.bind({});
Variant2.args = {
  variant: 'variant2',
};