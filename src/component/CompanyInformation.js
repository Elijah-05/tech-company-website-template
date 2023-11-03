import React from "react";

const CompanyInformation = ({
  user,
  setUser,
  handleInputChange,
  handleCheck,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="animate-slow-slide-l duration-700 grid gap-y-4">
      <div className="flex flex-col">
        <label htmlFor="company-name">Company Name</label>
        <input
          className="py-2 rounded-sm indent-3 outline-secondaryColor"
          id="company-name"
          name="companyName"
          type="text"
          placeholder="Enter Company Name"
          value={user.companyName}
          onChange={handleInputChange}
          autoFocus
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="company-location">Where is Your Company Located?</label>
        <input
          className="py-2 rounded-sm indent-3 outline-secondaryColor
                  "
          id="company-location"
          name="companyLocation"
          type="text"
          placeholder="Enter Company Location"
          value={user.companyLocation}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="">What You Are Looking For in Our Website?</h4>
        <div className=" flex ">
          <input
            className="py-2 rounded-sm indent-3 mx-2 scale-125"
            id="web-design"
            name="webDesign"
            type="checkbox"
            checked={user.webDesign}
            onChange={handleCheck}
          />
          <label className="inline-block" htmlFor="web-design">
            Website Design
          </label>
        </div>
        <div className=" flex ">
          <input
            className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
            id="web-development"
            name="webDevelopment"
            type="checkbox"
            checked={user.webDevelopment}
            onChange={handleCheck}
          />
          <label className="inline-block" htmlFor="web-development">
            Website Development
          </label>
        </div>
        <div className=" flex ">
          <input
            className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
            id="web-hosting"
            name="webHosting"
            type="checkbox"
            checked={user.webHosting}
            onChange={handleCheck}
          />
          <label className="inline-block" htmlFor="web-hosting">
            Web Hosting/Domain
          </label>
        </div>
        <div className=" flex ">
          <input
            className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
            id="system-development"
            name="systemDevelopment"
            type="checkbox"
            checked={user.systemDevelopment}
            onChange={handleCheck}
          />
          <label className="inline-block" htmlFor="system-development">
            System Development
          </label>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300 mr-5"
          onClick={() => {
            handlePrev();
          }}
        >
          Back
        </button>
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

export default CompanyInformation;
