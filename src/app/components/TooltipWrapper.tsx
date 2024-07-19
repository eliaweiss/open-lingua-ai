import React from "react";

const TooltipWrapper = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 w-max p-2 text-sm text-white bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {text}
      </div>
    </div>
  );
};

export default TooltipWrapper;
