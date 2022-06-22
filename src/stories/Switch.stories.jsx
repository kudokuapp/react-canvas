import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Switch } from "../components/Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Switch",
  component: Switch,
  decorators: [withDesign]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const switchComponent = () => <Switch />;

switchComponent.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=347%3A199"
  }
};
