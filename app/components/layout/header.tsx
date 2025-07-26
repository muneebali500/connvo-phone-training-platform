"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/common/button";

const headerNav = [
  {
    name: "Modes",
    link: "#modes",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="main-container">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#hero-home"
            className="flex items-center"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold text-[var(--color-primary)]">
              📞 Connvo
            </span>
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              className={`hamburger flex flex-col justify-between w-6 h-[18px] cursor-pointer ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <span className="block w-full h-0.5 bg-[var(--color-primary)] transition-all duration-300"></span>
              <span className="block w-full h-0.5 bg-[var(--color-primary)] transition-all duration-300"></span>
              <span className="block w-full h-0.5 bg-[var(--color-primary)] transition-all duration-300"></span>
            </div>
          </button>

          {/* Navigation menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center fixed md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-40`}
          >
            {headerNav.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className="block md:inline-block py-2 md:py-0 md:mx-6 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                onClick={closeMenu}
              >
                {name}
              </Link>
            ))}
            <Link href="tel:+1234567890" onClick={closeMenu}>
              <Button
                variant="primary"
                size="md"
                className="inline-block mt-2 md:mt-0 md:ml-6 px-6"
              >
                Call Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
