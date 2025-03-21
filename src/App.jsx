import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <>
      <div className="app-container bg-black relative z-0 text-green-950">
        {/* Navbar */}
        <Navbar />

        <div className="content">
          {/* Section for Home */}
          <div id="home">
            <Home />
          </div>

          {/* Section for About */}
          <div id="about">
            <About />
          </div>

          {/* Section for Contact */}
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
