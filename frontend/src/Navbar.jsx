import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 px-6 bg-gray-100 shadow-md">
      {/* Logo or Home Link */}
      <Link to="/" className="text-2xl font-bold text-gray-700">
        Logo
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <Link to="/contact" className="hover:text-gray-900">Contact</Link>
        <Link to="/restaurants" className="hover:text-gray-900">Restaurants</Link>
        <Link to="/about" className="hover:text-gray-900">About Us</Link>

        {/* Profile Dropdown */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <p className="hover:text-gray-900">Profile</p>
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                My Profile
              </Link>
              <Link
                to="/restaurants"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                Restaurants
              </Link>
              <button
                onClick={() => alert('Logging out')}
                className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </ul>

      {/* Hamburger Menu for Small Screens */}
      <div className="sm:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown for Small Screens */}
      {dropdownVisible && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 sm:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            to="/restaurants"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          >
            About Us
          </Link>
          <div className="border-t border-gray-200">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              My Profile
            </Link>
            <Link
              to="/restaurants"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Restaurants
            </Link>
            <button
              onClick={() => alert('Logging out')}
              className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
