import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              src="https://via.placeholder.com/150" // Replace with your logo image
              alt="Restaurant Finder"
              className="w-32 mb-4"
            />
            <p className="text-gray-400">
              Find the best restaurants near you and explore new culinary experiences.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> {/* Twitter Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-yelp"></i> {/* Yelp Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Restaurant Finder. All rights reserved.
            </p>
            {/* Newsletter Section */}
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-64 rounded-l-md border-none"
                />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
