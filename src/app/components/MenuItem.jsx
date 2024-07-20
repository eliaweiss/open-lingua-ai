import React from "react";
import Link from "next/link";

const MenuItem = ({ children, href = "#" }) => {
  return (
    <Link
      href={href}
      className="block p-2 rounded hover:bg-[#9a959560] font-semibold"
    >
      {children}
    </Link>
  );
};

export default MenuItem;
