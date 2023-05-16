import React from "react";

const ConfirmationPage = ({
  user,
  setUser,
  handleInputChange,
  handleCheck,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="animate-slow-slide-l duration-700">
      <div className="grid gap-y-4">
        <h2 className=" mt-0 mb-2 text-center text-xl font-medium">
          Personal Information
        </h2>
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
            name="companyName"
            type="text"
            placeholder="Enter Company Name"
            value={user.companyName}
            onChange={handleInputChange}
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
            name="heardFrom"
            value={user.heardFrom}
            onChange={handleInputChange}
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
              id="yes-helpful"
              name="isHelpful"
              value="yes-helpful"
              checked={user.isHelpful === "yes-helpful"}
              onChange={handleInputChange}
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
              value="not-that-much"
              checked={user.isHelpful === "not-that-much"}
              onChange={handleInputChange}
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
              value="not-helpful"
              checked={user.isHelpful === "not-helpful"}
              onChange={handleInputChange}
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
            value={user.comment}
            onChange={handleInputChange}
            rows={4}
          ></textarea>
        </div>
      </div>

      <div className="mt-4 two-buttons flex justify-end">
        <button
          className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300 mr-5"
          onClick={handlePrev}
        >
          Back
        </button>
        <button
          className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
