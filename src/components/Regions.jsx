import Button from "./Button";
import { regions } from "../data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { Autoplay, EffectCreative } from "swiper";

const Regions = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper3"
      >
        <div>
          {regions.map((region, index) => (
            <SwiperSlide key={index}>
              <div key={region.id} className="relative">
                <img
                  src={region.src}
                  alt="regions"
                  className="w-full h-[500px] md:h-full object-cover"
                />
                <div className="absolute top-0 pt-[15%] text-white px-8 md:pl-28 bg-regions w-full h-full">
                  <p className="text-5xl md:text-7xl font-semibold mb-6">
                    {region.title}
                  </p>
                  <p className="text-lg md:text-2xl font-normal mb-8 md:mb-10 w-[80%] md:w-[60%] leading-8 md:leading-9">
                    {region.body}
                  </p>
                  <Button
                    width={200}
                    height={64}
                    text="Book Now"
                    color="#fff"
                    bgColor="#3E86F5"
                    fontSize="16px"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Regions;
