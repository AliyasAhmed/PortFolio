import React, { useEffect, useMemo, useState } from "react";

const Starbg = ({ starCount = 30 }) => {
  const [rotate, setrotate] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY

      let DeltaX = mouseX - window.innerWidth/2
      let DeltaY = mouseY - window.innerHeight/2

      let angle = Math.atan2(DeltaY, DeltaX) * (180/Math.PI)
      setrotate(angle - 180)
    })
  })
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      top: `${Math.floor(Math.random() * 100)}vh`, // Reduce range for better distribution
      left: `${Math.random() * 100}%`, // Spread evenly
      size: `${Math.floor(Math.random() * 3) + 1}px`, // Random size
      duration: `${Math.random() * 20 + 3}s`, // Animation speed
    }));
  }, [starCount]); // Only re-run if starCount changes

  return (
    <div style={{transform:`rotate(${rotate}deg)`, transition: "transform 0.6s cubic-bezier(10.25, 12, 0.7, 12)"}} className="fixed min-h-screen w-full">
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



