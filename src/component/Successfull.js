import React from "react";
import { BsCheckCircle } from "react-icons/bs";
// import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

const Successfull = () => {
  return (
    <div className=" text-center flex flex-col items-center">
      <div
        className="my-12 flex
      items-center justify-center text-9xl text-[#12A052] rounded-full"
      >
        <BsCheckCircle />
        {/* <FaHandsHelping /> */}
      </div>
      <h1 className="text-4xl">Thank You!</h1>
      <p className="">You have successfully submited.</p>
      <Link to="/">
        <button className="mt-12 rounded-md hover:bg-secondaryColor hover:text-white duration-500 shadow-md bg-slate-50 w-60 py-2">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Successfull;
