import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 lg:px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img className="h-8 w-8" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="text-sm flex-grow flex items-center justify-end">
        <Link
          to="/"
          className="inline-block flex items-center mr-8 text-base font-sans font-medium text-black hover:text-gray-400"
        >
          About
        </Link>
        <Link to="/about" className="inline-block flex items-center">
          <button className="px-6 py-2 text-base font-sans font-medium text-white bg-black hover:bg-gray-800 rounded-md">
            Create Your QR Code
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
