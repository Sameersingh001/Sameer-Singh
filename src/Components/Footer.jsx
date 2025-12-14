import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p>&copy; 2025 Sameer Singh. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/sameer-singh-005682276/" className="hover:text-blue-500">LinkedIn</a>
        <a href="https://github.com/Sameersingh001" className="hover:text-blue-500">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
