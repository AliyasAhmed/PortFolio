import React from "react";

const Music = () => {
  return (
    <>
      <div className="min-h-screen h-[auto] w-[auto] flex flex-col items-center content-center">
        <p className="z-[1] scrollAnim flex bg-[#ffffff]  justify-center items-center backdrop-blur-sm rounded-2xl p-6  h-[auto] overflow-hidden text-black shadow-lg shadow-white">
          Music Projects
        </p>
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

        <div className="border border-border p-4 rounded-md backdrop-blur-sm shadow shadow-shadow">
          <p className="">
            Let's now discuss my musical contributions and projects. When I was
            seventeen, I began producing music. I had no idea how to mix and
            master it, but I eventually grasped the idea, and five years later,
            I signed my first label, which allowed me to reach the audience I
            had always desired.
          </p>
          
        </div>
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <div className=" flex flex-col justify-center content-center">
        

        <div className="flex flex-col z-[1] scrollAnim backdrop-blur-sm rounded-2xl bg-bg border border-border text-text h-[80vh] lg:w-[65vw] w-[85vw] overflow-hidden justify-center  content-center shadow-shadow shadow-lg">
          
          <iframe width="auto" height="300" src="https://www.youtube.com/embed/bQH0t_R81Eo?si=Bxx8TkOSadLx_mUF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p className="p-2 md:text-2xl">
          I wrote this song in 2021 and released it in 2023. I mixed and mastered it flawlessly, and I also sound-designed the drop part. I sent it to a number of labels, but most of the time I sent my previous songs to big labels and they rejected them, so I thought this time I would try with smaller labels. I sent it to one big label as well, but they responded to my email and asked me to sign a contract with them. After four months, I released this, earning 500k on their channel and 480k on mine.


          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Music;
