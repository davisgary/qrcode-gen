import React from 'react';
import { Link } from 'gatsby';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img className="h-8 w-8" src="path_to_logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="text-sm flex-grow text-right">
        <Link to="/" className="block mt-4 inline-block text-black hover:text-gray-400 mr-4">
          Home
        </Link>
        <Link to="/about" className="block mt-4 inline-block text-black hover:text-gray-400 mr-4">
          About
        </Link>
        <Link to="/contact" className="block mt-4 inline-block text-black hover:text-gray-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
