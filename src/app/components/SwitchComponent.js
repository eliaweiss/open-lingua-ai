// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";

const SwitchComponent = ({ label, initialChecked, onChange }) => {
  // Manage the switch's state
  console.log("initialChecked", initialChecked);
  const [checked, setChecked] = useState(initialChecked || false);

  // Handle changes when the switch is toggled
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label={label || "Switch"}
    />
  );
};

export default SwitchComponent;
