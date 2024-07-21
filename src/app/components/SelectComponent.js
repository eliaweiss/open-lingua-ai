import React from "react";
import classNames from "classnames";

const SelectComponent = ({ className, options, value, onChange, label }) => {
  return (
    <div className="mb-1">
      {label && (
        <label className="block mb-2 text-sm font-bold text-pText">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          `border rounded-sm px-1 m-1 text-black`,
          className
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
