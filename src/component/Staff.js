import React from "react";

const Staff = ({ name, position, photo }) => {
  return (
    <div className="group relative staf-container w-[250px] sm:w-[230px] flex flex-col items-center pt-1 shadow-lg rounded-b-2xl ">
      <div className="div-bg duration-1000 absolute bottom-[50px] group-hover:bg-secondaryColor bg-[#19254e] w-full h-[170px] group-hover:h-[90px] flex justify-center rounded-t-3xl origin-bottom  ">
        <img
          className=" absolute bottom-0 h-[240px] object-cover  group-hover:h-[250px] group-hover:sm:h-[250px]  mx-auto origin-bottom duration-1000 "
          src={photo}
          alt="staf memeber"
        />
      </div>
      <div className="relative z-0 border-2 grou-hover:bg-primaryColor border-primaryColor w-full py-1 rounded-b-2xl overflow-hidden">
        <div className=" absolute bottom-0 h-0 -z-10  bg-primaryColor group-hover:h-[65px] w-full duration-1000 " />
        <h2 className="  text-center text-primaryColor group-hover:text-white duration-1000 font-bold">
          {name}
        </h2>
        <p className="group-hover:text-white text-sm font-light -mt-1 duration-1000 ">
          {position}
        </p>
      </div>
    </div>
  );
};

export default Staff;
