import { travelDetails } from "../data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import Button from "./Button";

const TravelDetails = () => {
  return (
    <div className="bg-white md:w-full rounded-2xl drop-shadow box-shadow flex flex-wrap md:flex-row items-center justify-between flex-col gap-y-7 pt-[41px] pb-[36px] pl-6 pr-6">
      {travelDetails.map((item, index) => (
        <div key={index} className="flex w-full md:w-[213px] gap-4">
          <div className="flex mb-3 gap-3 items-center">
            <span
              style={{ color: item.iconColor, backgroundColor: item.bgColor }}
              className={`rounded-full md:bg-[${item.bgColor}] w-[55px] h-14 flex justify-center items-center`}
            >
              {item.icon}
            </span>
          </div>
          <div className="flex gap-2 flex-col">
            <span className="text-[#929191] tracking-[0.08em] uppercase text-base leading-6 font-medium">
              {item.title}
            </span>
            <span className="text-lg leading-[27px] capitalize text-[18px] font-medium text-[#000000] flex w-full">
              {item.details}
              <MdKeyboardArrowDown className="w-6 h-6" />
            </span>
          </div>
        </div>
      ))}
      <div className="md:block hidden">
        <Button
          text="Book Trip"
          bgColor="#3E86F5"
          color="#fff"
          height="64px"
          width="213px"
          fontSize="16px"
          icon={<FaPlane className="w-[25px] h-[25px]" />}
        />
      </div>
      <div className="md:hidden block w-full">
        <button
          type="button"
          className={`rounded-[10px] btn w-full h-16 font-semibold bg-[#3E86F5]`}
        >
          <div className="flex items-center gap-[10px] justify-center text-white w-full">
            <span>Book Trip</span>
            <span>
              <FaPlane />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TravelDetails;
