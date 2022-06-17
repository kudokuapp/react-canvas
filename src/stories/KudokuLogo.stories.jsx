import React from 'react';

import { KudokuLogo } from '../primitives/KudokuLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Primitives/Kudoku Logo',
  component: KudokuLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text'
      }
    }
  },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <KudokuLogo {...args} />;


// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const placeholder = Template.bind({});
placeholder.args = {
  variant: 'secondary'
};
