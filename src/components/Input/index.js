import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillBluegray50: "bg-bluegray_50",
  FillWhiteA700: "bg-white_A700",
};
const shapes = { srcRoundedBorder19: "rounded-radius195" };
const sizes = {
  smSrc: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  sm: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
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
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
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
  shape: PropTypes.oneOf(["srcRoundedBorder19"]),
  variant: PropTypes.oneOf(["srcFillBluegray50", "FillWhiteA700"]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcFillBluegray50",
  size: "smSrc",
};

export { Input };
