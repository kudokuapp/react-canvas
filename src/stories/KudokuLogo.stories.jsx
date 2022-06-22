import React from "react";
import { withDesign } from "storybook-addon-designs";

import { KudokuLogo } from "../primitives/KudokuLogo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Primitives/Kudoku Logo",
  component: KudokuLogo,
  decorators: [withDesign],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ["primary", "secondary", "variant1", "variant2"],
      control: { type: "radio" }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <KudokuLogo {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};

export const Variant1 = Template.bind({});
Variant1.args = {
  variant: "variant1"
};

export const Variant2 = Template.bind({});
Variant2.args = {
  variant: "variant2"
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=358%3A247"
  }
};

Secondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=358%3A245"
  }
};

Variant1.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=358%3A243"
  }
};

Variant2.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=358%3A241"
  }
};
