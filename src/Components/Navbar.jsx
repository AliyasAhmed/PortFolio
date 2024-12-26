import React, { useState } from "react";
import Starbg from "./Starbg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Starbg />
      <div>
        {/* Hamburger Icon */}
        <button
          className="fixed top-4 left-4 z-20 bg-bg backdrop-blur-sm border border-[#5353534b] p-2 rounded-md hover:bg-[#ffffff] hover:shadow-white shadow-lg transition-all hover:text-black "
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-[20rem] w-[12rem] bg-[#00000050] backdrop-blur-md transition-all duration-300 z-10 rounded-lg ${
            isOpen ? "translate-x-0 " : "-translate-x-full hidden"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={toggleMenu}
          >
            ✖
          </button>
          <div className="flex flex-col items-center mt-20 space-y-6">
            <button
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white px-4 py-2 rounded-lg hover:bg-[#ffffff] hover:text-black  hover:shadow-white shadow-lg transition-all fromdown"
            >
              Home
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white px-4 py-2 rounded-lg hover:bg-[#ffffff] hover:text-black  hover:shadow-white shadow-lg transition-all fromdown"
            >
              About
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white px-4 py-2 rounded-lg hover:bg-[#ffffff] hover:text-black  hover:shadow-white shadow-lg transition-all fromdown"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
