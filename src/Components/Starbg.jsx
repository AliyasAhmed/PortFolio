import React, { useMemo } from "react";

const Starbg = ({ starCount = 20 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      top: `${Math.floor(Math.random() * 100)}vh`, // Reduce range for better distribution
      left: `${Math.random() * 100}%`, // Spread evenly
      size: `${Math.floor(Math.random() * 3) + 1}px`, // Random size
      duration: `${Math.random() * 20 + 3}s`, // Animation speed
    }));
  }, [starCount]); // Only re-run if starCount changes

  return (
    <div className="fixed min-h-screen w-full">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-starMove rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            height: star.size,
            width: star.size,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default Starbg;
