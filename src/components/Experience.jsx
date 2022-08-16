import React from "react";
import Arrow from "../assets/arrow.svg";

import { motion } from "framer-motion";

const experienceVariants = {
  hidden: {
    x: "150px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const arrowVariants = {
  hidden: {
    y: "200px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Experience = () => {
  return (
    <div className="flex items-center flex-col map pt-[118px] pb-[150px] overflow-hidden">
      <motion.div
        variants={experienceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="lg:px-[324px] px-10 mb-9">
          <p className="text-center font-semibold md:text-[40px] text-2xl text-black leading-8 md:leading-[54px]">
            Creating the best <span className="text-[#3E86F5]">ice-cold!</span>{" "}
            experience you would never forget.
          </p>
        </div>
        <div className="lg:px-[372px] px-[52px] mb-[152px]">
          <p className="font-normal text-sm md:text-2xl text-center text-[#666666BF] leading-[22px] md:leading-9">
            Would you explore nature paradise in the world, find the best
            destination in the world with us.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        variants={arrowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-center text-black font-semibold md:text-[40px] text-2xl tracking-tight">
          View Regions available
        </p>
        <span className="relative right-[50%]">
          <img src={Arrow} alt="arrow pointing down" />
        </span>
      </motion.div>
    </div>
  );
};

export default Experience;
