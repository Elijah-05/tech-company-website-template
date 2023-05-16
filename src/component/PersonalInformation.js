import React from "react";

const PersonalInformation = ({
  user,
  setUser,
  handleInputChange,
  handleNext,
}) => {
  return (
    <div className="animate-slow-slide-l duration-700 grid gap-y-4">
      <div className="flex flex-col">
        <label htmlFor="name">First Name</label>
        <input
          className="py-2 rounded-sm indent-3 outline-secondaryColor"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleInputChange}
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
          name="position"
          type="text"
          placeholder="Enter your position"
          value={user.position}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          className="py-2 rounded-sm indent-3 outline-secondaryColor
                  "
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-6 flex justify-end">
        <button
          className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300"
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
