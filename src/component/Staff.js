import React from "react";

const Staff = ({ name, position, photo }) => {
  return (
    <div className="group relative staf-container w-[250px] sm:w-[230px] flex flex-col items-center pt-1 ">
      <div className="div-bg duration-500 absolute bottom-[50px] bg-[#19254e] w-full h-[170px] group-hover:h-[90px] flex justify-center rounded-t-3xl origin-bottom  ">
        <img
          className=" absolute bottom-0 h-[240px] object-cover  group-hover:h-[250px] group-hover:sm:h-[250px]  mx-auto origin-bottom duration-300 "
          src={photo}
          alt="staf memeber"
        />
      </div>
      <div className=" border-2 border-primaryColor w-full py-1 rounded-b-2xl">
        <h2 className="  text-center text-primaryColor group-hover:text-secondaryColor duration-300 font-semibold">
          {name}
        </h2>
        <p className=" text-sm font-light -mt-1 ">{position}</p>
      </div>
    </div>
  );
};

export default Staff;
