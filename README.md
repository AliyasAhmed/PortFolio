Hey I am Aliyas Software and sound Engineer and this is my portfolio which is opesource


# **This is breakdown of few logics of my code**

**1. Core Concept: Parallax Effect**
Instead of rotating stars, we create a depth illusion by moving the star field in the opposite direction of mouse movement (like how objects in distance move slower than nearby ones).

**2. Mouse Tracking:**
```jsx
useEffect(() => {
  window.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX - window.innerWidth / 2;
    const mouseY = e.clientY - window.innerHeight / 2;
    
    setPosition({
      x: mouseX * 0.08,
      y: mouseY * 0.08
    });
  });
}, []);
```
- Calculates mouse position relative to screen center
- Multiplies by 0.08 to create a "dampening" effect (stars move slower than actual mouse movement)
- Stores these values in state as x/y coordinates

**3. Visual Translation:**
```jsx
transform: `translate(${position.x}px, ${position.y}px)`
```
- Moves entire star container element using CSS transform
- The container moves opposite to mouse direction (mouseX/Y are relative to center)

**4. Speed Control:**
- The `0.08` multiplier acts as a sensitivity control:
  - Higher number (0.1) = faster movement
  - Lower number (0.05) = slower movement
- The transition's `0.3s` duration controls how quickly the position updates follow the mouse

**5. Star Generation (same as original):**
```jsx
const stars = useMemo(() => [...]);
```
- Creates random star positions/sizes
- Memoized to prevent unnecessary recalculations

**6. Layered Movement:**
- Base movement: Mouse-driven translation of entire container
- Secondary movement: Individual star animations (from CSS `animate-starMove`)

**Why This Works:**
1. When mouse moves right → container moves left (negative X translation)
2. Mouse moves up → container moves down (positive Y translation)
3. The combined effect creates a responsive parallax movement
4. Transition timing makes the movement smooth but still fast

**Key Differences from Original:**
- Instead of calculating angles for rotation, we track direct positional offsets
- Uses translation (position shifting) instead of rotation
- Maintains star positions relative to each other while moving the whole group

**Adjustment Tips:**
1. Make movement faster: Change `0.08` to `0.1` or higher
2. Make movement smoother: Change transition duration to `0.4s`
3. Make response sharper: Use `transition: "transform 0.1s linear"`

___

# Antoher way to make the stars rotare is the code below i wrote

```
import React, { useEffect, useMemo, useState } from "react";

const Starbg = ({ starCount = 30 }) => {
  const [rotate, setrotate] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY

      let DeltaX = mouseX - window.innerWidth/2
      let DeltaY = mouseY - window.innerHeight/2

      let angle = Math.atan2(DeltaY, DeltaX)  * (180/Math.PI)
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
```

```
window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY

      let DeltaX = mouseX - window.innerWidth/2
      let DeltaY = mouseY - window.innerHeight/2

      let angle = Math.atan2(DeltaY, DeltaX)  * (180/Math.PI)
      setrotate(angle - 180)
```

Your explanation is mostly on point! Here’s a refined version with some clarifications:

1. **Event Listener:**  
   - You add a mousemove event listener so that whenever the mouse moves, you can capture its position.
   - `let mouseX = e.clientX` and `let mouseY = e.clientY` capture the horizontal and vertical positions of the mouse relative to the viewport.

2. **Calculating Delta (Offset from Center):**  
   - `let DeltaX = mouseX - window.innerWidth/2` calculates how far the mouse is from the center of the screen horizontally.
   - `let DeltaY = mouseY - window.innerHeight/2` calculates the vertical offset from the center.
   - These values give you the relative position of the mouse from the center.

3. **Computing the Angle with `Math.atan2`:**  
   - `Math.atan2(DeltaY, DeltaX)` calculates the angle (in radians) between the positive x-axis and the point given by `(DeltaX, DeltaY)`.
     - Note: The function takes the y-coordinate first and then the x-coordinate.
   - Multiplying by `(180/Math.PI)` converts the angle from radians to degrees.

4. **Adjusting the Angle:**  
   - `setrotate(angle - 180)` adjusts the computed angle by subtracting 180 degrees, which might be used to align the rotation with your desired reference frame.

5. **About the Value 57.29:**  
   - The value 57.29 (approximately) is an example output when converting 1 radian to degrees (since \(1 \text{ radian} \approx 57.2958^\circ\)). It’s not necessarily the “center” but just a conversion factor illustration.

---

### In Summary:
- **Mouse Coordinates:** Capture the mouse’s position.
- **Delta Calculation:** Compute how far the mouse is from the center.
- **Angle Calculation:** Use `Math.atan2(DeltaY, DeltaX)` to get the angle in radians, convert to degrees, and then adjust by subtracting 180.

Your explanation is essentially correct—just ensure you clarify that the 57.29 value comes from the radians-to-degrees conversion (i.e., \(1 \text{ rad} \times \frac{180}{\pi} \approx 57.29^\circ\)) and isn’t specifically tied to the center of the screen.