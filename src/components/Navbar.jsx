import { useState } from 'react';
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full md:px-20 px-2 flex justify-between items-center  ">
     
      <div className='flex justify-center items-center  md:gap-4'>
        <div className='w-[60px] h-[60px]'> <img className="w-full h-full" src={logo} alt="Logo"/></div>
        
        <span className='font-playfair text-2xl font-bold text-[#ebb61a]'>AsrtoNarad</span>
      </div>

    
      <div className="hidden gap-8 md:flex">
        <NavLink to="/" className="text-gray-700 hover:text-[#195e77] font-medium">
          Home
        </NavLink>
        <NavLink to="/about" className="text-gray-700 hover:text-[#195e77] font-medium">
          About Us
        </NavLink>
        <NavLink to="/services" className="text-gray-700 hover:text-[#195e77] font-medium">
          Services
        </NavLink>
        <NavLink to="/contact" className="text-gray-700 hover:text-[#195e77] font-medium">
          Contact
        </NavLink>
      </div>

     
      <div className="flex items-center">
        <Link to="/determiner" className="hidden md:flex text-gray-700 hover:text-[#195e77] font-medium">
        <button className="hidden md:flex bg-[#e9ae01] rounded-3xl py-2 px-4 text-white">
          Login / Register
        </button>
        </Link>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="flex md:hidden bg-[#e9ae01] w-[50px] justify-center rounded-3xl py-1 px-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu size={20} />
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="absolute top-[68px] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-5 w-full flex flex-col gap-4 md:hidden z-50">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-[#195e77] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-[#195e77] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className="text-gray-700 hover:text-[#195e77] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-[#195e77] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <button
            className="bg-[#e9ae01] hover:bg-[#c93d03]  rounded-3xl py-2 px-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
