import React from "react";

import { SelectBox } from "components";

export default {
  title: "vinicius_s_application/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder8",
  variant: "OutlineGray300",
  size: "sm",
  className: "w-[300px]",
};
