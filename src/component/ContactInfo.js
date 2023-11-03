import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className=" bg-gray-300 w-full max-w-[93%] sm:max-w-[80%] md:max-w-[40%] min-h-[530px] py-5 px-4 sm:px-8 rounded-lg ">
      <h1 className=" text-primaryColor text-3xl font-semibold ">
        Contact Info
      </h1>
      <p className=" text-left mt-4 ">
        Lorem ipsum dolor sit amet consectetur. Massa lectus libero et eget
        feugiat elit.
      </p>
      <div className=" mt-8 grid gap-y-4 ">
        <div className="group flex  rounded-xl  cursor-pointer hover:-translate-y-1 duration-300 ">
          <div className=" w-7 h-7 text-xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-secondaryColor">
            <BsFillTelephoneFill />
          </div>
          <div className="max-w-[280px] sm:w-[200px] text-left ">
            <h2 className="text-lg text-primaryColor font-bold mt-1">
              (+251) 32 12 34567
            </h2>
            <p className="  ">
              Lorem ipsum dolor sit amet consectetur. Facilisi.
            </p>
          </div>
        </div>
        <div className="group flex  rounded-xl  cursor-pointer hover:-translate-y-1 duration-300 ">
          <div className=" w-7 h-7 text-2xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-secondaryColor">
            <MdEmail />
          </div>
          <div className="max-w-[280px] sm:w-[200px] text-left ">
            <h2 className="text-lg text-primaryColor font-bold mt-1 ">
              sample@gmail.com
            </h2>
            <p className="  ">
              Lorem ipsum dolor sit amet consectetur. Facilisi.
            </p>
          </div>
        </div>
        <div className="group flex  rounded-xl cursor-pointer hover:-translate-y-1 duration-300 ">
          <div className=" w-7 h-7 text-3xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-secondaryColor">
            <MdLocationOn />
          </div>
          <div className="max-w-[280px] sm:w-[200px] text-left ">
            <h2 className="text-lg text-primaryColor font-bold mt-1">
              Addis Ababa, Ethiopia
            </h2>
            <p className="  ">
              Lorem ipsum dolor sit amet consectetur. Facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
