import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white shadow-md px-6 font-satoshi">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-6 ">
        {/* Logo */}
        <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />

        {/* Hamburger Menu (visible on small screens) */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Regular Navbar (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#C5A476] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-[#C5A476] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#C5A476] transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-[#C5A476] transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-[#C5A476] transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar (only visible on small screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-2xl text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Sidebar Links */}
        <ul className="mt-16 space-y-6 text-gray-700 font-medium px-6">
          <li>
            <Link to="/" className="hover:text-[#C5A476]" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </section>
  );
};

export default Navbar;

