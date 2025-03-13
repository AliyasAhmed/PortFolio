import { React, useRef } from "react";
import { motion, useInView } from "motion/react";
const Lightsaver = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView?{opacity:1,y:0}:{}}
      transition={{duration:0.5}}
      className="h-[30vh] w-1 bg-white shadow-[0px_5px_22px_2px_aqua] "
    ></motion.div>
  );
};

export default Lightsaver;
