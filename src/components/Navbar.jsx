import { useEffect } from "react";

import Logo from "../assets/main-logo.svg";
import { RiMenu3Fill } from "react-icons/ri";

import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { setSidebarActive } = useStateContext();

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");

    const navOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-650px 0px 0px 0px",
    };

    const navObserver = new IntersectionObserver((entries, navObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar?.classList?.add("nav-scrolled");
        } else {
          navbar?.classList?.remove("nav-scrolled");
        }
      });
    }, navOptions);

    navObserver.observe(header);
  });

  return (
    <div
      id="navbar"
      className="py-[25px] fixed top-0 w-full flex justify-between items-center"
    >
      <div className="flex items-center mt-2 md:mt-0 w-full md:w-auto justify-between">
        <a
          href="/"
          className="flex items-center md:ml-[50px] lg:ml-[120px] ml-[30px]"
        >
          <img src={Logo} alt="logo" className="mr-[10px] text-[40px]" />
          <p className="font-bold text-xl leading-[30px] text-white">
            Arctic Travels
          </p>
        </a>
        <div className="md:hidden block" onClick={() => setSidebarActive(true)}>
          <span className="cursor-pointer mr-[26.43px] block text-white text-3xl hamburger">
            <RiMenu3Fill />
          </span>
        </div>
      </div>
      <div className="hidden md:block">
        <nav>
          <ul className="flex text-white font-normal text-14 leading-[21px]">
            <li className="mr-[40px] ml-[40px]">
              <a href="/about">About</a>
            </li>
            <li className="mr-[40px]">
              <a href="/support">Support</a>
            </li>
            <li className="mr-[40px]">
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        type="button"
        className="hidden shadow-md btn md:block md:mr-[50px] lg:mr-[120px] w-[151px] h-[48px] bg-white rounded-[10px] font-semibold text-14 text-[#3e86f5]"
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
