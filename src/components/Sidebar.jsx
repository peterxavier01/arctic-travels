import Logo from "../assets/main-logo.svg";
import Close from "../assets/close-icon.svg";

import { motion } from "framer-motion";
import { useStateContext } from "../contexts/ContextProvider";

const sidebarVariants = {
  hidden: {
    y: "-1000px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const Sidebar = () => {
  const { setSidebarActive } = useStateContext();

  return (
    <motion.div
      className="md:hidden fixed overlay w-screen h-full top-0 left-0 flex flex-col items-center justify-between text-white z-10 pb-[52px]"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <a href="/" className="flex mt-[52px] gap-[10px] items-center">
        <img src={Logo} alt="logo" className="w-10 h-10" />
        <p className="font-bold text-xl leading-[30px]">Arctic Travels</p>
      </a>
      <div>
        <ul className="gap-[72px] flex flex-col font-medium text-[25px]">
          <li className="text-center">
            <a href="/about">About</a>
          </li>
          <li className="text-center">
            <a href="/support">Support</a>
          </li>
          <li className="text-center">
            <a href="/faq">FAQs</a>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={Close}
          alt="close-icon"
          className="w-12 h-12 cursor-pointer"
          onClick={() => setSidebarActive(false)}
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;
