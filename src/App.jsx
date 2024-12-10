import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div className="app-container bg-black relative z-0">
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

        {/* Background video */}
        <video autoPlay loop muted className="background-video">
          <source
            src="https://raw.githubusercontent.com/AliyasAhmed/media-files/f758c973df7fe6fa5db810faebb899342069b470/ForPc.mp4
"
            media="(max-width:1920px)"
            type="video/mp4"
          />
        </video>
        <div className="bg"></div>
      </div>
    </>
  );
};

export default App;
