import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <section>
        {/* Hamburger Icon */}
        <button
          className="fixed overflow-hidden top-4 left-4 z-20 backdrop-blur-sm border border-border p-2 rounded-md transition-all hover:text-black"
          onClick={toggleMenu}
          onBlur={()=>{
            setTimeout(() => {
              setIsOpen(false)
            },100);
          }}
        >
          {isOpen ? <span id="animbtn">X</span> : <span id="animbtn">☰</span>}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-[20rem] w-[12rem] bg-[#00000050] backdrop-blur-md transition-all duration-300 z-10 rounded-lg ${
            isOpen ? "translate-x-0 " : "-translate-x-full hidden fromdown "
          }`}
        >
          <div className="flex flex-col items-center mt-20 space-y-6">
            <button
              onClick={() => {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white px-4 py-2 rounded-lg hover:text-black fromdown overflow-hidden relative"
            >
              <p id="animbtn">About</p>
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white overflow-hidden relative px-4 py-2 rounded-lg hover:text-black fromdown"
            >
              <p id="animbtn">Projects</p>
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white px-4 py-2 rounded-lg relative overflow-hidden hover:text-black fromdown"
            >
              <p id="animbtn">Contact</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
