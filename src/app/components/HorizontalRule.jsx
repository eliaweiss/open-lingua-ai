import React from "react";

const HorizontalRule = ({ className = "", ...props }) => {
  return (
    <hr
      className={`w-full my-4 border-t border-[#dcdfe5] ${className}`}
      {...props}
    />
  );
};

export default HorizontalRule;
