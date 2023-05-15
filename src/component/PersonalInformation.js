import React from "react";

const PersonalInformation = ({ handleNext }) => {
  return (
    <div
      id="personal-form"
      className=" animate-slow-slide-l form-component mt-8 duration-700"
    >
      <h1 className="text-center text-3xl font-medium">Personal Information</h1>
      <div className="max-w-[430px] mx-auto  ">
        <form className="my-8 flex flex-col gap-y-4 ">
          <div className="flex flex-col">
            <label htmlFor="name">First Name</label>
            <input
              className="py-2 rounded-sm indent-3 outline-secondaryColor"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoFocus
              required
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
          <button
            className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300"
            onClick={() => {
              handleNext();
              const pForm = document.getElementById("personal-form");
              pForm.classList.add("animate-slow-slide-r");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
