import React from "react";

const PersonalInformation = () => {
  return (
    <div
      id="Personal-Information"
      className="inner-container border border-slate-400 w-full pb-[80px]"
    >
      <div className="progress-conatiner mt-3">
        <div className="w-full bg-slate-50 h-3 rounded-full">
          <div className="w-[28%] h-full bg-secondaryColor rounded-full"></div>
        </div>
        <p className="text-center mt-1">Step-1</p>
      </div>

      <div className="form-component mt-8">
        <h1 className="text-center text-3xl font-medium">
          Personal Information
        </h1>
        <div className="max-w-[430px] mx-auto border border-red-500">
          <form className="my-8 flex flex-col gap-y-4 ">
            <div className="flex flex-col">
              <label htmlFor="name">First Name</label>
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor
                     "
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="position">Your Position In The Company</label>
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor
                  "
                id="position"
                name="name"
                type="text"
                placeholder="Enter your position"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email Address</label>
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor
                  "
                id="email"
                name="name"
                type="text"
                placeholder="Enter your email"
              />
            </div>
          </form>
          <div className="flex justify-end">
            <button className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
