import React from 'react';

const Textarea = ({ value, onChange, className = '', rows = 4, placeholder = '' }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={`w-full p-2 border rounded text-black ${className}`}
      rows={rows}
      placeholder={placeholder}
    />
  );
};

export default Textarea;