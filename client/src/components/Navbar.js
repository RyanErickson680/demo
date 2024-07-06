import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;