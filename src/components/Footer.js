import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-white text-lg">© 2023 Your Company</span>
        </div>
        <ul>
        <div className="flex items-center space-x-4">
          <li className="text-white hover:text-gray-200">
            About
          </li>
          <li className="text-white hover:text-gray-200">
            Contact
          </li>
          <li className="text-white hover:text-gray-200">
            Terms of Service
          </li>
          <li className="text-white hover:text-gray-200">
            Privacy Policy
          </li>
        </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
