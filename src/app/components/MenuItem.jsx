import React from 'react';
import Link from 'next/link';

const MenuItem = ({ children, href = '#' }) => {
  return (
    <li className="my-2">
      <Link href={href} className="block p-2 rounded hover:bg-gray-700 transition">
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;