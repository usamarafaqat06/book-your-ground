import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 transition duration-400 bg-[#090E18] ">
      <div className="container mx-auto px-4 bg-secondary">
        <nav className="navbar flex items-center justify-between border-b-2 border-gray-300 py-2 ">
          <Link to="/" className="navbar-brand py-0">
            <img src="./images/GroungGo.png" className="w-52 h-[100px] " alt="Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            className="navbar-toggler shadow-none border border-white p-2 lg:hidden"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white w-6 h-0.5 block"></span>
            <span className="navbar-toggler-icon bg-white w-6 h-0.5 block mt-1"></span>
            <span className="navbar-toggler-icon bg-white w-6 h-0.5 block mt-1"></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-12">
            <ul className="flex items-start space-x-8">
              <li>
                <Link to="/" className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-primary transition-colors duration-300 relative">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-primary transition-colors duration-300 relative">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-primary transition-colors duration-300 relative">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="" className="text-white text-md font-semibold uppercase px-4 py-2 rounded-full bg-primary border-primary transition-all duration-500 border-2 hover:border-blue-500">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
            <ul className="flex flex-col items-center space-y-4 mt-4">
              <li>
                <Link to="/" onClick={toggleMenu} className="text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu} className="text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu} className="text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="" onClick={toggleMenu} className="text-white text-md font-semibold uppercase px-4 py-2 rounded-full bg-[#0AA70A] border-[#0AA70A] transition-all duration-500 border-2 hover:border-blue-500">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
