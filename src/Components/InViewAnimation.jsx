import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const InViewAnimation = ({ children, className, animationProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2 }}
      className={className} // Allow passing custom classes
      {...animationProps} // Allow passing custom animation props
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
