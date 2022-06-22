import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Navbar } from "../components/Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Navigation Bar",
  component: Navbar,
  decorators: [withDesign]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const navbar = () => <Navbar />;

navbar.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/n6Sqzg6fE0JIBbAPys2r9X/Primitives?node-id=347%3A199"
  }
};
