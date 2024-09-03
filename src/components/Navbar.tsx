"use client";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-sm md:max-w-md mx-auto mt-7 mb-20">
      <ul className="flex items-center justify-between">
        <li className="hover:text-[#149eca] duration-200">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2" to="/learn">
            Learn
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2" to="/contribute">
            Contribute
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
