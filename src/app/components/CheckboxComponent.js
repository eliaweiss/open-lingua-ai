import React, { useState } from "react";
import classNames from "classnames";

const CheckboxComponent = ({
  className,
  label,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={classNames(`form-checkbox h-5 w-5 px-1 m-1`, className)}
        {...props}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default CheckboxComponent;
