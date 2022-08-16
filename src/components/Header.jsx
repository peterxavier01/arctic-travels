import Navbar from "./Navbar";
import TravelDetails from "./TravelDetails";

import { motion } from "framer-motion";

import { logos } from "../data";

const headerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const Header = () => {
  return (
    <>
      <header id="header" className="header relative">
        <Navbar />
        <motion.div
          className="relative top-[40%] flex flex-col items-center w-full text-center px-[2px]"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="capitalize font-bold text-[32px] md:text-[56px] tracking-tight text-white md:leading-[72.8px]">
            Plan the perfect winter trip
          </h1>
          <p className="font-normal text-14 md:text-[22px] md:mt-7 mt-2 md:leading-[34px] lg:px-[86px] xl:px-[136px] text-white w-2/4">
            Easily plan your ideal ski trip from home with the help of
            professionals
          </p>
        </motion.div>
      </header>
      <div className="-mt-[80px] pl-[28px] pr-[28px] md:pl-[120px] md:pr-[120px] mx-auto my-auto bg-[#F8F9FC]">
        <TravelDetails />
      </div>
      <div className="w-full bg-[#F8F9FC] py-10 flex flex-wrap justify-center items-center gap-[120px] md:px-[222px] px-2 mx-auto">
        {logos.map((item, index) => (
          <span key={index} className="bg-[#F8F9FC]">
            <img src={item.logo} alt="logos" className="w-full" />
          </span>
        ))}
      </div>
    </>
  );
};

export default Header;
