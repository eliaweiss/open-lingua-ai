import React from "react";

const SelectComponent = ({ options, value, onChange, label }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-bold text-pText">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block text-black w-full p-2 border border-primary rounded focus:outline-none "
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
