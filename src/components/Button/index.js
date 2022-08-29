import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder15: "rounded-radius15",
  RoundedBorder24: "rounded-radius245",
  RoundedBorder19: "rounded-radius195",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  FillBlue500: "bg-blue_500 text-white_A700",
  OutlineBluegray50: "border border-bluegray_50 border-solid text-black_900",
  FillBlue50087: "bg-blue_500_87 text-white_A700",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lg: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
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
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
    "CircleBorder15",
    "RoundedBorder24",
    "RoundedBorder19",
  ]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "FillBlue500",
    "OutlineBluegray50",
    "FillBlue50087",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder15",
  variant: "FillGray900",
  size: "sm",
};

export { Button };
