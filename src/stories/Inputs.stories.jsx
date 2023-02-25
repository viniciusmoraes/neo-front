import React from "react";

import { Input } from "components";

export default {
  title: "vinicius_s_application/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder8",
  variant: "srcOutlineGray300",
  size: "smSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
