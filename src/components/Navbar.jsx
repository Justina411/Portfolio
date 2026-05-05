import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-6 md:px-10 py-5 bg-black/95 backdrop-blur-md border-b border-white/10 z-[100]">
      
      {/* Logo - Stays Left */}
      <h1 className="text-3xl font-extrabold tracking-wide text-orange-500 relative z-[110]">
        JTECH
      </h1>

      {/* --- DESKTOP LINKS --- */}
      <ul className="hidden md:flex items-center gap-10 text-white font-medium">
        <li><Link to="/" className="hover:text-amber-500 transition">Home</Link></li>
        <li><Link to="/resume" className="hover:text-amber-500 transition">Resume</Link></li>
        <li><Link to="/portfolio" className="hover:text-amber-500 transition">Portfolio</Link></li>
        <li><Link to="/about" className="hover:text-amber-500 transition">About</Link></li>
        <li><Link to="/testimonials" className="hover:text-amber-500 transition">Testimonials</Link></li>
      </ul>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <Link to="/contact" className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold">
          Contact
        </Link>
      </div>

      {/* --- MOBILE HAMBURGER ICON --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-3xl z-[110] relative"
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* --- MOBILE DROPDOWN --- */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-black/98 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-[105]`}
      >
        <ul className="flex flex-col items-center gap-8 text-white text-2xl font-bold">
          <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/resume">Resume</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/portfolio">Portfolio</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/testimonials">Testimonials</Link></li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="text-orange-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;