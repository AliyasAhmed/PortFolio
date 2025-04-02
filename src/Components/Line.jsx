import { React, useRef } from "react";
import { motion, useInView } from "motion/react";

const LightSaver = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -65 }}
      animate={isInView ? { opacity: 1, y: 0} : {}}
      transition={{ duration: 1.5 }}
      className="h-[30vh] w-1 bg-white shadow-[0px_5px_23px_2px_rgba(0,238,255)]"
    ></motion.div>
  );
};

export default LightSaver;

