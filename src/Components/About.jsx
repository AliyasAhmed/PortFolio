import React from "react";
import { useEffect } from "react";
import Starbg from "./Starbg";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  const scrollcallback = () => {
    const elements = document.querySelectorAll(".scrollAnim, .line"); // Select both scrollable and line elements
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Check if the element is visible in the viewport

        if (element.classList.contains("scrollAnim")) {
          element.classList.add("fromdown"); // Trigger "fromdown" animation for scrollAnim
        }
        if (element.classList.contains("line")) {
          element.classList.add("glowlight"); // Trigger "glowlight" animation for line
        }
      }
    });
  };

  window.addEventListener("scroll", scrollcallback);
  scrollcallback(); // Initial check in case the element is already in view

  return (
    <>
      <Starbg starCount={200} />
      <div className=" min-h-screen flex flex-col items-center md:text-xl">
        <div className=" flex justify-center items-center backdrop-blur-sm rounded-xl  shadow  ">
          <h1>
            <p className="z-[1] typewriter text-5xl">Hey!</p>
          </h1>
        </div>
        <div className=" glowlight h-[30vh] bg-[#f8f8f8] w-1 shadow-[0px_10px_20px_2px_aqua]"></div>

        <div className="z-[1] fromdown border border-border backdrop-blur-sm rounded-2xl bg-bg text-[#ffffff] h-auto overflow-hidden p-6 w-[80vw] shadow-shadow shadow-lg">
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
            number of software projects on my own.
          </p>
          {/* technologies showcase */}
        </div>
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[1] scrollAnim flex bg-[#ffffff]  justify-center items-center backdrop-blur-sm rounded-2xl p-6  h-[auto] overflow-hidden text-black shadow-lg shadow-white">
          <p className="transition-all animate-pulse">technologies i use</p>
        </div>
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

        {/* skillSet */}
        <div class="scrollAnim w-[70vw] xl:w-[20rem] md:w-[35vw] h-[9vh] backdrop-blur-sm justify-center border border-border p-5 rounded-md bg-bg overflow-hidden">
          <div class="fromleft flex gap-[3rem] left-0">

            <img class="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img class="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img class="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img class="" width="35vw" src="python.svg" alt="Python Icon" />
            <img class="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img class="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img class="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img class="" width="35vw" src="react.svg" alt="React Icon" />
            <img class="" width="35vw" src="next.svg" alt="Next.js Icon" />

            <img class="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img class="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img class="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img class="" width="35vw" src="python.svg" alt="Python Icon" />
            <img class="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img class="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img class="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img class="" width="35vw" src="react.svg" alt="React Icon" />
            <img class="" width="35vw" src="next.svg" alt="Next.js Icon" />
          </div>
        </div>

        {/* Software Projects*/}
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[1] scrollAnim flex bg-[#ffffff]  justify-center items-center backdrop-blur-sm rounded-2xl p-6  h-[auto] overflow-hidden text-black shadow-lg shadow-white">
          <p className="transition-all animate-pulse">Software Projects</p>
        </div>
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        {/* Music Player */}
        <div className="z-[1] scrollAnim backdrop-blur-sm rounded-2xl bg-bg border border-border text-text h-[auto] w-[80vw] overflow-hidden p-6 shadow-shadow shadow-lg">
          <p className="m-3 md:text-xl ">Music Player</p>
          <img
            width={""}
            height={""}
            className="py-3 rounded-lg w-[100vw] h-auto "
            src="https://raw.githubusercontent.com/AliyasAhmed/media-files/2f4384eee187e3b129cc12fdae24b36220b3771b/Music_player.png
"
            alt=""
          />
          <p className=" md:text-3xl">
            This music player is basically a Spotify clone, which was
            entertaining, but I had to add some javascript to make it function.
            However, I wanted to add some music so that it would function as a
            regular music player, so I added a few songs from my library and
            added it to the server. This music player is completely functional
            and free. It can play music, change the volume, and add new songs,
            but that's all It can do. i used basic HTML, CSS and Javascript for
            this project it is responsive for any device
            <p className="">
              Visit the link below to learn more about this initiative.
            </p>
          </p>
        </div>
        {/* music player button */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[2] scrollAnim">
          <a
            href="https://spotifymuiscplayer.freewebhostmost.com/"
            target="_blank"
          >
            <button className="text-white backdrop-blur-md  rounded-lg p-4 shadow-lg shadow-shadow transition-all hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white md:text-3xl  ">
              <p>Music Player</p>
            </button>
          </a>
        </div>
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

        {/* Todo app */}
        <div className="z-[1] scrollAnim  border border-border backdrop-blur-sm rounded-2xl bg-bg text-[#ffffff] h-[auto] overflow-hidden p-6 w-[80vw] shadow-shadow shadow-lg object-cover">
          <p className="m-3 md:text-xl">Todo App</p>
          <img
            className="rounded-lg  "
            src="https://raw.githubusercontent.com/AliyasAhmed/media-files/2f4384eee187e3b129cc12fdae24b36220b3771b/Todoapp.png"
            alt="Todo.img"
          />
          <p className="py-10 md:text-3xl">
            When I was studying React and Tailwind, I created this to-do app
            because I wanted to create a project that wasn't in HTML, CSS, or
            JS, and React was ideal for that. I created this using Tailwind and
            React. It can add, delete, and edit tasks, and it uses the browser's
            storage to save the most recent tasks so you don't lose any. It can
            do anything that other tasks can accomplish. it is responsive for
            any device.
            <p className="my-2">
              Visit the link below to learn more about this initiative.
            </p>
          </p>
        </div>
        {/* todo button */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[1] scrollAnim">
          <a href="https://aliyasahmed.github.io/WhatToDo/" target="_blank">
            <button className="text-white backdrop-blur-md  rounded-lg p-4 shadow-lg shadow-shadow hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all hover:bg-bg md:text-3xl  ">
              Todo App
            </button>
          </a>
        </div>
        {/* Netflix Clone */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[1] scrollAnim border border-border backdrop-blur-sm rounded-2xl bg-bg text-[#ffffff] h-[auto] overflow-hidden p-6 w-[80vw] shadow-shadow shadow-lg">
          <p className="m-3 md:text-xl">Netflix Clone</p>
          <img
            controls
            className=" rounded-lg w-[auto] h-auto"
            src="https://github.com/AliyasAhmed/media-files/blob/main/Netflix.png?raw=true"
            alt=""
          />
          <p className="py-10 md:text-3xl">
            Although it shouldn't be on the list, I didn't include JS when I
            first started learning HTML and CSS because I wasn't sure what the
            That language's syntax was. My first HTML/CSS project, which took
            two hours to complete, was this one. This was, I suppose, my first
            web programming project. That is the rationale behind my inclusion
            of this.
            <p className="my-2">
              Visit the link below to learn more about this initiative.
            </p>
          </p>
        </div>
        {/* Netflix button */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[2] scrollAnim">
          <a
            href="https://aliyasahmed.github.io/Netflix-clone/"
            target="_blank"
          >
            <button className="text-white backdrop-blur-lg  rounded-lg p-4 shadow-lg shadow-shadow hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all hover:bg-bg md:text-3xl  ">
              Netflix
            </button>
          </a>
        </div>
        {/* X Clone */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[1] scrollAnim border border-border backdrop-blur-sm rounded-2xl bg-bg text-[#ffffff] h-[auto] overflow-hidden p-6 w-[80vw] shadow-shadow shadow-lg">
          <p className="m-3 md:text-xl">X clone</p>
          <img
            controls
            className=" rounded-lg w-[auto] h-auto"
            src="https://raw.githubusercontent.com/AliyasAhmed/media-files/refs/heads/main/X.png"
            alt=""
          />
          <p className="py-10 md:text-3xl">
            One of the smaller projects I worked on was this one as well. I only
            used HTML and Tailwind, and I mostly concentrated on responsive
            design, which is much simpler in Tailwind. I completed this project
            in five hours because I wanted to see how much of a difference it
            makes when we don't use CSS.
            <p className="my-2">
              Visit the link below to learn more about this initiative.
            </p>
          </p>
        </div>
        {/* Netflix button */}
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className="z-[2] scrollAnim">
          <a href="https://aliyasahmed.github.io/projectX/" target="_blank">
            <button className="text-white backdrop-blur-lg  rounded-lg p-4 w-[6rem] shadow-lg shadow-shadow hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white transition-all hover:bg-bg md:text-3xl  ">
              X
            </button>
          </a>
        </div>
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
      </div>
    </>
  );
};

export default About;
