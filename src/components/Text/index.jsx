import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[32px] md:text-[34px] text-[36px]",
  h2: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  h3: "font-semibold sm:text-[18px] md:text-[20px] text-[22px]",
  h4: "font-medium text-[20px]",
  h5: "text-[18px]",
  h6: "font-medium text-[16px]",
  body1: "text-[14px]",
  body2: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
