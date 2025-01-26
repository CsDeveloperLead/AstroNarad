import { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? "text-[#195e77] font-semibold underline"
      : "text-gray-700 hover:text-[#195e77] font-medium";

  return (
    <div className="w-full md:px-20 px-2 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center md:gap-4">
        <div className="w-[60px] h-[60px]">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </div>
        <span className="font-playfair text-2xl font-bold text-[#ebb61a]">
          AstroNarad
        </span>
      </div>

      {/* Links for Desktop */}
      <div className="hidden gap-8 md:flex">
        <NavLink to="/" className={getLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={getLinkClasses}>
          About Us
        </NavLink>
        <NavLink to="/services" className={getLinkClasses}>
          Services
        </NavLink>
        <NavLink to="/contact" className={getLinkClasses}>
          Contact
        </NavLink>
      </div>

      {/* Login/Register and Hamburger */}
      <div className="flex items-center">
        <Link to="/determiner" className="hidden md:flex">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[68px] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-5 w-full flex flex-col gap-4 md:hidden z-50">
          <NavLink to="/" className={getLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/services" className={getLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/contact" className={getLinkClasses}>
            Contact
          </NavLink>
          <Link to="/determiner">
          <button className="bg-[#e9ae01] hover:bg-[#c93d03] rounded-3xl py-2 px-4 text-white">
            Login / Register
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
