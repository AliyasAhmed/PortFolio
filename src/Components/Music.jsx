import React from "react";
import InViewAnimation from "./InViewAnimation";
import LightSaver from "./lightsaver.jsx";

const musicProjects = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/bQH0t_R81Eo?si=Bxx8TkOSadLx_mUF",
    title: "Project 1",
    description: `I wrote this song in 2021 and released it in 2023. I mixed and
    mastered it flawlessly, and I also sound-designed the drop part. I
    sent it to a number of labels, but most of the time I sent my
    previous songs to big labels and they rejected them, so I thought
    this time I would try with smaller labels. I sent it to one big
    label as well, but they responded to my email and asked me to sign
    a contract with them. After four months, I released this, earning
    500k on their channel and 480k on mine.`
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/OM-wp8PIrqc?si=c_0zZ007hUpFg0PA",
    title: "Project 2",
    description: `In addition, this music was a contract for the label I worked for.
    It was released in 2023, and I was in charge of the cinematography
    and editing. I wrote the song in 22 and gave it time to improve
    its quality and other aspects before mixing and mastering it in my
    own studio at the end of the year before sending it to the label.
    The contract took four months to settle, and they released it. I
    created the official music video on my own channel.`
  }
];

const Music = () => {
  return (
    <div className="min-h-screen h-[auto] w-[auto] flex flex-col items-center content-center">
      <InViewAnimation className="z-[1] scrollAnim flex bg-[#ffffff] justify-center items-center backdrop-blur-sm rounded-2xl p-6 h-[auto] overflow-hidden text-black shadow-lg shadow-white">
        Music Projects
      </InViewAnimation>
      <LightSaver/>

      <InViewAnimation className="border border-border p-4 rounded-md backdrop-blur-sm shadow shadow-shadow text-justify">
        Let's now discuss my musical contributions and projects. When I was
        seventeen, I began producing music. I had no idea how to mix and
        master it, but I eventually grasped the idea, and five years later, I
        signed my first label, which allowed me to reach the audience I had
        always desired.
      </InViewAnimation>
      <LightSaver/>
      {musicProjects.map((project) => (
        <React.Fragment key={project.id}>
          <div className="flex flex-col justify-center content-center">
            <InViewAnimation className="flex flex-col z-[1] backdrop-blur-sm rounded-2xl bg-bg border border-border text-text h-[80vh] lg:w-[65vw] w-[85vw] overflow-hidden justify-center content-center shadow-shadow shadow-md md:text-2xl text-justify">
              <iframe
                width="auto"
                height="400"
                src={project.videoSrc}
                title={`YouTube video player - ${project.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="p-2">{project.description}</p>
            </InViewAnimation>
          </div>
          <LightSaver/>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Music;