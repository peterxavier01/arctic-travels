import React from "react";
import { motion } from "framer-motion";

const passesVariants = {
  hidden: {
    x: "-500px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Passes = () => {
  return (
    <div className="bg-passes pl-7 md:pl-[120px] pt-[76px] md:pt-[152px] overflow-hidden">
      <motion.div
        variants={passesVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-white text-[28px] md:text-7xl font-semibold leading-[38px] md:leading-[108px] tracking-tight w-[80%] p-4 mb-[72px]">
          View Passes We’ve Made Available For You
        </h2>
        <button className="bg-[#3E86F5] btn w-[215px] md:w-[285px] h-16 text-white text-base rounded-[10px] mb-[121px]">
          View Passes
        </button>
      </motion.div>
    </div>
  );
};

export default Passes;
