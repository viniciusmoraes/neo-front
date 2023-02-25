import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcOutlineGray300: "bg-white_A700 border-[1px] border-gray_300 border-solid",
  OutlineGray300: "bg-white_A700 border-[1px] border-gray_300 border-solid",
  OutlineIndigo900:
    "bg-deep_purple_50 border-indigo_900 border-r-[4px] border-solid",
  FillDeeppurple50: "bg-deep_purple_50",
  FillIndigo900: "bg-indigo_900",
  OutlineIndigo90019: "bg-white_A700 shadow-bs",
  OutlineIndigo900_1: "border-[1px] border-indigo_900 border-solid",
  OutlineGray300_1: "border-b-[1px] border-gray_300 border-solid",
  FillLightgreen50: "bg-light_green_50",
  FillGray900: "bg-gray_900",
  OutlineRed600: "bg-white_A700 border-[2px] border-red_600 border-solid",
};
const shapes = {
  srcRoundedBorder8: "rounded-[8px]",
  RoundedBorder8: "rounded-[8px]",
  CircleBorder22: "rounded-[22px]",
  CircleBorder18: "rounded-[18px]",
  CustomBorderTL8:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px]",
};
const sizes = {
  smSrc: "pr-[14px] py-[15px]",
  sm: "px-[9px] py-[10px]",
  md: "p-[12px]",
  lg: "pb-[18px] pl-[13px] pt-[13px]",
  xl: "p-[15px]",
  "2xl": "pb-[35px] pt-[15px] px-[15px]",
  "3xl": "pl-[15px] py-[15px]",
  "4xl": "pb-[23px] pr-[17px] pt-[17px]",
  "5xl": "pr-[20px] py-[20px]",
  "6xl": "py-[22px]",
  "7xl": "sm:pr-[20px] pr-[22px] py-[22px]",
  "8xl": "py-[24px]",
  "9xl": "sm:pr-[20px] pr-[25px] py-[25px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder8",
    "RoundedBorder8",
    "CircleBorder22",
    "CircleBorder18",
    "CustomBorderTL8",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "OutlineGray300",
    "OutlineIndigo900",
    "FillDeeppurple50",
    "FillIndigo900",
    "OutlineIndigo90019",
    "OutlineIndigo900_1",
    "OutlineGray300_1",
    "FillLightgreen50",
    "FillGray900",
    "OutlineRed600",
  ]),
  size: PropTypes.oneOf([
    "smSrc",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcOutlineGray300",
  size: "smSrc",
};

export { Input };
