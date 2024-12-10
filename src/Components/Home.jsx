import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
    {/* <Starbg starCount={50} /> */}
      <div className="min-h-screen flex flex-col items-center md:text-2xl">
        <div className="flex justify-center items-center p-6 border border-border backdrop-blur-sm rounded-2xl md:text-4xl w-[auto] h-auto overflow-hidden bg-bg">
          <h1>
            <p className="typewriter">Welcome To my PortFolio</p>
          </h1>
        </div>

        <div className="flex justify-center items-center my-10 border border-[#3d3d3d8f] backdrop-blur-sm rounded-2xl p-6 w-[60vw] bg-bg text-text h-[auto] overflow-hidden">
          <p className="fromdown ">
            I'm Aliyas, and I work as a sound and software engineer! I have
            completed numerous software and sound engineering projects. In terms
            of sound engineering, I have created music for numerous labels and
            designed numerous sounds. For example, my music on Trap Party even
            received one million views on YouTube. Then, as you can see below, I
            completed a number of software projects on my own.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
