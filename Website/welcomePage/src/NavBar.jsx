// src/NavBar.jsx
import React from 'react';

function NavBar() {
  return (
    <nav className="bg-green-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/earth-svgrepo-com.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-2xl font-bold">EcoMarks</span>
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-white hover:text-gray-200">Home</a>
          <a href="#about" className="text-white hover:text-gray-200">About</a>
          <a href="#services" className="text-white hover:text-gray-200">Services</a>
          <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
