import React from "react";
import { withDesign } from "storybook-addon-designs";

import { MaterialUISwitch } from "../components/Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Switch",
  component: MaterialUISwitch,
  decorators: [withDesign],
  argTypes: {
    variant: {}
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MaterialUISwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=347%3A199"
  }
};
