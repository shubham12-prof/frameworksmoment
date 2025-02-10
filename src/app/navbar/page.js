"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white fixed w-full z-20">
      <Link href="/home" className="text-2xl font-bold">
        Menu
      </Link>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 p-5 flex flex-col space-y-4 text-center md:hidden">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-gray-400">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
