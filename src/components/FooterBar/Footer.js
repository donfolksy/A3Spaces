import React from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
  
<section className="bg-[#252525] flex flex-col py-10 px-6 sm:px-16 lg:px-28">
  <div className="flex flex-col sm:flex-row justify-between gap-8">
    {/* Logo & Socials */}
    <div>
      <img src="images/logo.png" alt="A3spaces Logo" className="w-[80px]" />
      <p className="text-white py-3 text-sm">Consultancy at its best</p>
      <div className="flex gap-4">
        <div className="bg-white text-black rounded-full p-2">
          <FaLinkedinIn />
        </div>
        <div className="bg-white text-black rounded-full p-2">
          <FaXTwitter />
        </div>
        <div className="bg-white text-black rounded-full p-2">
          <FaInstagramSquare />
        </div>
      </div>
    </div>

    {/* Links */}
    <ul className="text-white">
      <li className="font-bold pb-4">Links</li>
      <li className="text-sm pb-3 hover:text-[#C5A476] transition">
        <Link to="/">Home</Link>
      </li>
      <li className="text-sm pb-3 hover:text-[#C5A476] transition">
        <Link to="/aboutus">About Us</Link>
      </li>
      <li className="text-sm pb-3 hover:text-[#C5A476] transition">
        <Link to="/services">Services</Link>
      </li>
      <li className="text-sm pb-3 hover:text-[#C5A476] transition">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="text-sm hover:text-[#C5A476] transition">
        <Link to="/contactus">Contact</Link>
      </li>
    </ul>

    {/* Contact Details */}
    <ul className="text-white">
      <li className="font-bold pb-4">Contact Us</li>
      <li className="text-sm pb-3">A3spaces@gmail.com</li>
      <li className="text-sm pb-3">hra3spaces@gmail.com</li>
      <li className="text-sm pb-3">+234 123 456</li>
      <li className="text-sm pb-3">+234 123 456</li>
    </ul>

    {/* Address */}
    <ul className="text-white">
      <li className="font-bold pb-4">Address</li>
      <li className="text-sm pb-3">
        Plot 130, Asofan-Ofankor <br /> Lagos, Nigeria
      </li>
      <li className="text-sm pb-3">
        P.O Box AE 13, Atomic Energy <br /> Abuja, Nigeria
      </li>
    </ul>
  </div>

  {/* Divider */}
  <div className="bg-[#EFE6D9] h-[1px] my-7"></div>

  {/* Copyright */}
  <div className="text-white text-center">
    <p className="text-sm">© 2024 A3spaces. All Rights Reserved.</p>
  </div>
</section>

    
  );
};

export default Footer;
