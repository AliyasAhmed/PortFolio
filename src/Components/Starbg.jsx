import React, { useEffect, useMemo, useState } from "react";

const Starbg = ({ starCount = 30 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e) => {
      const mouseX = e.clientX - window.innerWidth / 2;
      const mouseY = e.clientY - window.innerHeight / 2;
      
      setPosition({
        x: mouseX * 0.08,
        y: mouseY * 0.10
      });
    };

    // Device orientation handler
    const handleOrientation = (e) => {
      const gamma = e.gamma; // Left/right tilt (degrees)
      const beta = e.beta; // Front/back tilt (degrees)
      
      // Adjust these multipliers to control rotation sensitivity
      setPosition({
        x: gamma * 2, // Horizontal movement
        y: beta * 0.50   // Vertical movement
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    
    // Add device orientation listener with iOS permission check
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      top: `${Math.floor(Math.random() * 100)}vh`,
      left: `${Math.random() * 100}%`,
      size: `${Math.floor(Math.random() * 3) + 1}px`,
      duration: `${Math.random() * 30 + 3}s`,
    }));
  }, [starCount]);

  return (
    <div 
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s linear",
      }} 
      className="fixed min-h-screen w-full"
    >
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