import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo - link to home */}
        <Link to="/" className="text-2xl font-bold text-slate-900 tracking-wide hover:text-cyan-500 transition">
          MyPortfolio
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link to="/" className="text-slate-700 hover:text-cyan-500 font-medium transition duration-300">Home</Link></li>
          <li><Link to="/about" className="text-slate-700 hover:text-cyan-500 font-medium transition duration-300">About</Link></li>
          <li><Link to="/projects" className="text-slate-700 hover:text-cyan-500 font-medium transition duration-300">Projects</Link></li>
          <li><Link to="/skills" className="text-slate-700 hover:text-cyan-500 font-medium transition duration-300">Skills</Link></li>
          <li><Link to="/contact" className="text-slate-700 hover:text-cyan-500 font-medium transition duration-300">Contact</Link></li>
        </ul>

        {/* "Hire Me" button as Link */}
        <a
          href="https://t.me/ngounmalin"
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-lg font-semibold transition duration-300 shadow-md inline-block"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
