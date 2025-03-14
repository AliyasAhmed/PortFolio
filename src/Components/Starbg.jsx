import React from "react";

const Starbg = ({starCount = 600}) => {
  return (
    <div>
      <div className="absolute min-h-screen w-full">
        {[...Array(starCount)].map((_, i) => (
          <div
            key={i}
            className="relative animate-starMove  rounded-full bg-[#ffffff] shadow-[0px_0px_20px_2px_aqua] overflow-hidden"
            style={{
              top: `${Math.floor(Math.random() * 1090)}vh`, // Randomize top position
              left: `${Math.random() * 90}%`, // Randomize left position
              height: `${Math.floor(Math.random() * 2 + 1)}px`, // Randomize size
              width: `${Math.floor(Math.random() * 2 + 1)}px`, // Match size with height
              animationDuration: `${Math.random() * 7 + 1}s`, // Randomize animation speed
              // animationDelay: `${20}s`,

            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Starbg;
