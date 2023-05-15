import React from "react";
import { useRef } from "react";

const CompanyInformation = ({ handleNext, handlePrev }) => {
  const page = useRef();
  return (
    <div
      className=" animate-slow-slide-l form-component mt-8 duration-700"
      ref={page}
    >
      <h1 className="text-center text-3xl font-medium">Company Information</h1>
      <div className="max-w-[430px] mx-auto ">
        <form className="my-8 flex flex-col gap-y-4 ">
          <div className="flex flex-col">
            <label htmlFor="company-name">Company Name</label>
            <input
              className="py-2 rounded-sm indent-3 outline-secondaryColor"
              id="company-name"
              name="compName"
              type="text"
              placeholder="Enter Company Name"
              autoFocus
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="company-location">
              Where is Your Company Located?
            </label>
            <input
              className="py-2 rounded-sm indent-3 outline-secondaryColor
                  "
              id="company-location"
              name="compLocation"
              type="text"
              placeholder="Enter Company Location"
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
              />
              <label className="inline-block" htmlFor="web-hosting">
                Web Hosting/Domain
              </label>
            </div>
            <div className=" flex ">
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
                id="system-development"
                name="sysDevelopment"
                type="checkbox"
              />
              <label className="inline-block" htmlFor="system-development">
                System Development
              </label>
            </div>
          </div>
        </form>
        <div className="flex justify-end">
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
    </div>
  );
};

export default CompanyInformation;
