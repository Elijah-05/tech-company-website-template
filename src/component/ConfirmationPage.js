import React from "react";

const ConfirmationPage = ({ handleNext, handlePrev }) => {
  return (
    <div className=" animate-slow-slide-l form-component mt-8">
      <h1 className="text-center text-3xl font-medium">
        Confirm Your Information
      </h1>
      <div className="max-w-[430px] mx-auto ">
        <form className="my-8 flex flex-col ">
          <h2 className="mt-0 mb-2 text-center text-xl font-medium">
            Personal Information
          </h2>
          <div className="grid gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="name">First Name</label>
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor"
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
          </div>

          <h2 className=" mt-8 mb-2 text-center text-xl font-medium">
            Company Information
          </h2>
          <div className="grid gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="company-name">Company Name</label>
              <input
                className="py-2 rounded-sm indent-3 outline-secondaryColor
                     "
                id="company-name"
                name="compName"
                type="text"
                placeholder="Enter Company Name"
                required
                autoFocus
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
          </div>

          <h2 className=" mt-8 mb-2 text-center text-xl font-medium">
            Survery Form
          </h2>
          <div className="grid gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="hear-from">Where Did You Hear About us?</label>
              <select
                className="py-2 outline-secondaryColor rounded-sm"
                id="hear-from"
                name="whereHear"
              >
                <option value="not-selected" disabled>
                  where do you hear?
                </option>
                <option value="wordOfMouth">Word of Mouth</option>
                <option value="socialMedia">Social Media</option>
                <option value="flyers">Flyers</option>
                <option value="recomendation">By Recomendation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <h2>Have you found what you were looking for on our website?</h2>
              <div className=" mt-1 flex ">
                <input
                  className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
                  id="is-helpful"
                  name="isHelpful"
                  type="radio"
                />
                <label className="system-development" htmlFor="is-helpful">
                  Yes, I found it helpful!
                </label>
              </div>
              <div className=" flex ">
                <input
                  className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
                  id="not-that-much"
                  name="isHelpful"
                  type="radio"
                />
                <label className="system-development" htmlFor="not-that-much">
                  Not that much.
                </label>
              </div>
              <div className=" flex ">
                <input
                  className="py-2 rounded-sm indent-3 outline-secondaryColor mx-2 scale-125"
                  id="not-helpful"
                  name="isHelpful"
                  type="radio"
                />
                <label className="system-development" htmlFor="not-helpful">
                  No, I didn't find!
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment">
                Any Comment/
                <span className="text-sm font-light">Optional</span>
              </label>
              <textarea
                className=" rounded-sm p-1"
                id="comment"
                name="comment"
                placeholder="Leave us your commment"
                rows={4}
              ></textarea>
            </div>
          </div>
        </form>

        <div className="two-buttons flex justify-end">
          <button
            className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300 mr-5"
            onClick={handlePrev}
          >
            Back
          </button>
          <button
            className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300"
            onClick={handleNext}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
