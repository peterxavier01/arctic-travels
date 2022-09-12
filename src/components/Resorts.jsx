import React from "react";

import Button from "./Button";
import { resorts } from "../data";

const Resorts = () => {
  return (
    <div className="mb-[124px] md:mb-[136px] px-4 overflow-hidden">
      <h2 className="text-[28px] md:text-5xl font-semibold leading-8 md:leading-[65px] mt-[100px] md:ml-4 xl:ml-[120px] mb-4 md:mb-[72px] w-[302px] md:w-[570px] p-4 md:p-0">
        The best resorts to chill and relax
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-5xl w-full mx-auto gap-8 p-4 place-items-center">
        {resorts.map((resort) => (
          <div
            key={resort.id}
            className="resort relative overflow-hidden max-h-screen rounded-[20px] pb-20 md:pb-[65px] lg:pb-[30px]"
          >
            <img src={resort.src} alt={resort.title} className="w-full block" />
            <div className="absolute w-full top-0 pt-[100%] h-full bg-resorts px-6 text-white opacity-100 resorts-content-wrapper">
              <div className="flex flex-col relative -top-1/2">
                <p className="font-semibold text-2xl md:text-[28px] mb-4">
                  {resort.title}
                </p>
                <p className="font-medium text-lg leading-7 mb-7">
                  {resort.body}
                </p>
                <Button
                  width="100%"
                  height={64}
                  text="Book Now"
                  color="#fff"
                  bgColor="#3E86F5"
                  fontSize="16px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resorts;
