import React from "react";
import aaUniversity from "../images/addis_ababa_university.png";
import dangote from "../images/dangote.jpg";
import kefeta from "../images/kefeta.png";
import safaricom from "../images/Safaricom_Ethiopia_Logo.jpg";
import ride from "../images/ride.png";

const WorkedWith = () => {
  return (
    <section className=" max-w-5xl mx-auto my-8 text-center">
      <h1 className=" text-2xl sm:text-3xl font-medium px-4 uppercase">
        Who We Have Worked With
      </h1>
      <p className=" text-sm sm:text-base opacity-70 px-4 lg:px-0 ">
        Lorem ipsum dolor sit amet consectetur. Dignissim enim semper porttitor
        dolor integer. Donec faucibus pellentesque at morbi faucibus.
      </p>
      <div className=" flex px-2 lg:px-0  mx-auto items-center justify-between mt-1 sm:mt-4 ">
        <div className=" w-24 mx-1  mb-2 hover:scale-[1.03] duration-300">
          <img
            className=" w-full h-full object-scale-down"
            src={aaUniversity}
            alt="addis ababa university"
          />
        </div>
        <div className=" w-32 mx-1  hover:scale-[1.03] duration-300">
          <img
            className=" w-full h-full object-scale-down"
            src={dangote}
            alt="dangote cement company"
          />
        </div>
        <div className=" w-32 mx-1  hover:scale-[1.03] duration-300">
          <img
            className=" w-full h-full object-scale-down"
            src={kefeta}
            alt="kefita youth improvement company"
          />
        </div>
        <div className=" w-32 mx-1  hover:scale-[1.03] duration-300">
          <img
            className=" w-full h-full object-scale-down"
            src={safaricom}
            alt="safaricom network company"
          />
        </div>
        <div className=" w-32 mx-1  hover:scale-[1.03] duration-300 mr-2">
          <img
            className=" w-full h-full object-scale-down"
            src={ride}
            alt="ride hailing company"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
