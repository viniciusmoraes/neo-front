import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder18: "rounded-[18px]",
  RoundedBorder4: "rounded-[4px]",
  RoundedBorder8: "rounded-[8px]",
  CircleBorder22: "rounded-[22px]",
  icbCircleBorder22: "rounded-[22px]",
};
const variants = {
  OutlineIndigo900:
    "border-[1px] border-indigo_900 border-solid text-indigo_900",
  OutlineGray300:
    "bg-white_A700 border-[1px] border-gray_300 border-solid text-indigo_900",
  FillIndigo900: "bg-indigo_900 text-light_green_A200",
  FillLightgreenA200: "bg-light_green_A200 text-indigo_900",
  OutlineGray300_1:
    "border-b-[1px] border-gray_300 border-solid text-bluegray_800",
  FillRed100: "bg-red_100 text-red_900",
  OutlineIndigo90019: "bg-white_A700 shadow-bs text-bluegray_800",
  FillYellow200: "bg-yellow_200 text-light_green_900",
  OutlineBluegray90026: "bg-light_green_50 shadow-bs1 text-bluegray_800",
  FillWhiteA700: "bg-white_A700 text-bluegray_500",
  OutlineGray301: "border-[1px] border-gray_301 border-solid text-gray_800",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  icbFillIndigo900: "bg-indigo_900",
};
const sizes = {
  sm: "pr-[4px] py-[4px]",
  md: "p-[4px]",
  lg: "pr-[7px] py-[7px]",
  xl: "py-[7px]",
  "2xl": "pr-[10px] py-[10px]",
  "3xl": "pl-[11px] py-[11px]",
  "4xl": "pr-[13px] py-[13px]",
  "5xl": "pr-[6px] py-[16px]",
  "6xl": "pr-[16px] py-[18px]",
  smIcn: "p-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder18",
    "RoundedBorder4",
    "RoundedBorder8",
    "CircleBorder22",
    "icbCircleBorder22",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo900",
    "OutlineGray300",
    "FillIndigo900",
    "FillLightgreenA200",
    "OutlineGray300_1",
    "FillRed100",
    "OutlineIndigo90019",
    "FillYellow200",
    "OutlineBluegray90026",
    "FillWhiteA700",
    "OutlineGray301",
    "FillIndigo500",
    "icbFillIndigo900",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "smIcn",
  ]),
};

Button.defaultProps = {
  className: "",
  shape: "",
  variant: "OutlineIndigo900",
  size: "2xl",
};
export { Button };
