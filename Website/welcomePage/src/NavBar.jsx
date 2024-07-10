import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-green-600 p-4 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/earth-svgrepo-com.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-white text-2xl font-bold hover:text-green-200">EcoMarks</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-green-200">Home</Link>
          <Link to="/about" className="text-white hover:text-green-200">About</Link>
          <Link to="/services" className="text-white hover:text-green-200">Services</Link>
          <Link to="/contact" className="text-white hover:text-green-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;