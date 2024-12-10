import React from "react";

const Starbg = ({starCount = 300}) => {
  return (
    <div>
      <div className="absolute min-h-screen ">
        {[...Array(starCount)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-starMove  rounded-full bg-[#f8f8f8] shadow-[0px_2px_10px_2px_aqua]"
            style={{
              top: `${Math.random() * 650}vh`, // Randomize top position
              left: `${Math.random() * 100}vw`, // Randomize left position
              height: `${Math.floor(Math.random() * 2 + 1)}px`, // Randomize size
              width: `${Math.floor(Math.random() * 2 + 1)}px`, // Match size with height
              animationDuration: `${Math.random() * 7 + 1}s`, // Randomize animation speed
              // animationDelay: `${10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Starbg;
