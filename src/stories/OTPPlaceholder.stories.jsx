import React from "react";

import { OTPPlaceholder } from "../components/OTPPlaceholder";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/OTP Placeholder",
  component: OTPPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OTPPlaceholder {...args} />;

export const placeholder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
placeholder.args = {
  active: true,
  placeholder: "Your WhatsApp here",
  regionCode: "+62",
  label: "Try it first"
};
