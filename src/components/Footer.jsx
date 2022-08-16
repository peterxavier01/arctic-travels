import React from "react";
import Plane from "../assets/plane.svg";

import { footerLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <div className="my-16 px-7 md:flex justify-between gap-20">
      <div className="md:pl-[90px] lg:pl-[120px]">
        <div className="mb-[72px] md:mb-8">
          <span className="mb-5 block">
            <img
              src={Plane}
              alt="artic-travels logo"
              className="border border-[#BEBEBE] border-dashed rounded-full p-2"
            />
          </span>
          <p className="mb-4 font-semibold text-[20px] leading-[30px] tracking-tight">
            Artic Travels
          </p>
          <p className="text-xs font-medium text-[#000000b2] leading-8">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div className="md:flex gap-[25px] mb-[87px] hidden">
          {socialLinks.map((link, index) => (
            <span
              key={index}
              className="w-10 h-10 border border-[#C1C0C0] border-dashed rounded-full flex justify-center items-center"
            >
              <img src={link.src} alt="facebook icon" />
            </span>
          ))}
        </div>

        <div className="hidden md:block">
          <p className="text-[#0000007f] text-base font-medium leading-8 text-left">
            © 2022 Arctic Travels - All right reserved.
          </p>
        </div>
      </div>

      <div className="md:pr-[90px] lg:pr-[120px]">
        <div className="flex flex-wrap gap-[72px] mb-[86px] md:mb-[140px]">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <p className="text-[#3E86F5] uppercase font-normal text-base leading-5 tracking-widest mb-10">
                {link.title}
              </p>
              <div className="flex flex-col gap-5 text-[#031530] text-sm -tracking-tight">
                <a href={link.linkOne.toLowerCase()}>{link.linkOne}</a>
                <a href={link.linkTwo.toLowerCase()}>{link.linkTwo}</a>
                <a href={link.linkThree.toLowerCase()}>{link.linkThree}</a>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-6 text-xs text-[#000000b2] leading-6 font-medium">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>

      <div className="flex gap-[25px] mb-[87px] md:hidden">
        {socialLinks.map((link, index) => (
          <span
            key={index}
            className="w-10 h-10 border border-[#C1C0C0] border-dashed rounded-full flex justify-center items-center"
          >
            <img src={link.src} alt="facebook icon" />
          </span>
        ))}
      </div>

      <div className="block md:hidden">
        <p className="text-[#0000007f] text-base font-medium leading-8 text-left">
          © 2022 Arctic Travels - All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
