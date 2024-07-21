import React from "react";

const SelectComponent = ({ options, value, onChange, label }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-bold text-gray-700">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
