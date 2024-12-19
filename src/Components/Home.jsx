import React from "react";
import { useEffect } from "react";
import Starbg from "./Starbg";

const Home = () => {
  return (
    <>
    {/* <Starbg/> */}
      <div id="home" className=" min-h-screen h-[auto] w-[auto] flex flex-col items-center md:text-2xl">
        
        <div className="flex justify-center items-center p-6 border border-border backdrop-blur-sm rounded-2xl md:text-4xl w-[auto] h-auto bg-bg">
          
          <h1>
            <p className="typewriter ">Welcome To my PortFolio</p>
          </h1>
        </div>
        <div className="line h-[30vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>


        <div className="fromdown flex justify-center items-center border border-[#3d3d3d8f] backdrop-blur-sm rounded-2xl p-6 w-[85vw] bg-bg text-text h-[auto] overflow-hidden">
        <p className="md:text-xl">
            I'm Aliyas, and I am a sound and software engineer! I have I worked
            on numerous software and sound engineering projects. In terms of
            sound engineering, I have created music for numerous labels and
            designed numerous sounds. For example, my music on Trap Party even
            received one million views on YouTube. In the beginning, I started
            to produce music when I was in high school. Then for five years I
            got my hands on sound design and a little bit graphic design, and my
            passion was working with computers. I used to game a lot, so I
            started programming in Python, then made my AI desktop assistant.
            Then I started the HTML CSS JS journey, then I came to know about
            React, started that, and then started Tailwind CSS, and then I
            started NextJS, and between then I enjoyed producing music for
            labels and making software. I also made some music videos or edited
            a few in my career. I have been doing a little bit of cybersecurity
            to enhance my skills. Then, as you can see below, I completed a
            number of software projects on my own I have also done some music video projects where i made cinematic videos for my projects and for people i worked for.
          </p>
        </div>
        <div className="line md:h-[30vh] h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

      </div>
    </>
  );
};

export default Home;
