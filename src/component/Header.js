import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 transition duration-400 bg-transparent ">
      <div className="container mx-auto px-4">
        <nav className="navbar flex items-center justify-between border-b-2 border-gray-300 py-2">
          <a className="navbar-brand py-0" href="/">
            <img src="./images/logo.png" className="w-52" alt="Logo" />
          </a>
          <button
            className="navbar-toggler shadow-none border border-white p-2 lg:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-12">
            <ul className="flex items-start space-x-8">
            <li className="nav-item">
  <li className="nav-item">
  <a 
    className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] hover:w-full transition-colors duration-300 relative" 
    href="/"
  >
    Home
    {/* Green underline on hover */}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0AA70A] transition-all duration-300 hover:w-full"></span>
  </a>

</li>

</li>

              <li className="nav-item">
                <a className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] transition-colors duration-300 relative" href="/">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-md font-semibold uppercase tracking-wide hover:text-[#0AA70A] transition-colors duration-300 relative" href="/">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className=" text-white text-md font-semibold uppercase px-4 py-2 rounded-full bg-[#0AA70A] border-[#0AA70A] font-roboto transition-all duration-500 border-2 hover:border-blue-500" href="/">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
