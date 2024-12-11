import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 lg:px-24 text-white font-sans font-medium">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/">
          <img className="h-8 w-8" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="text-sm flex-grow flex items-center justify-end">
        <Link
          to="/"
          className="inline-block flex items-center mr-9"
        >
          Home
        </Link>
        <Link to="/start" className="inline-block flex items-center">
          <button className="px-6 py-2 rounded-3xl shadow-[0_0_4px_rgba(255,255,255,0.4)]">
            Generate QR Code
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
