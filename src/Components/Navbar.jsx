import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center border border-[#5353534b] p-4 backdrop-blur-sm w-full max-w-[90vw] sm:max-w-[70vw] lg:max-w-[20vw] md:max-w-[50vw] m-auto rounded-xl bg-bg mb-10">
      <div className="flex justify-between w-full">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#ffffff] rounded-lg px-3 py-2 transition-all shadow-lg backdrop-blur-xl shadow-white translate-y-1"
              : "text-white rounded-lg px-3 py-2 transition-all hover:bg-[#ffffff] hover:text-black hover:shadow-md hover:shadow-white"
          }
          to="/Home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#ffffff] rounded-lg px-3 py-2 transition-all shadow-lg backdrop-blur-xl shadow-white translate-y-1"
              : "text-white rounded-lg px-3 py-2 transition-all hover:bg-[#ffffff] hover:text-black hover:shadow-md hover:shadow-white"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#ffffff] rounded-lg px-3 py-2 transition-all shadow-lg backdrop-blur-xl shadow-white translate-y-1"
              : "text-white rounded-lg px-3 py-2 transition-all hover:bg-[#ffffff] hover:text-black hover:shadow-md hover:shadow-white"
          }
          to="/Contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
