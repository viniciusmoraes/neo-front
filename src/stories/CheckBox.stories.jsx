import React from "react";
import { CheckBox } from "components";

export default {
  title: "vinicius_s_application/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  shape: "RoundedBorder4",
  variant: "FillIndigo900",
  size: "sm",
  inputClassName: "mr-1",
};
