import React from "react";

const SurveryForm = () => {
  return (
    <div
      id="Survey-Form"
      className="inner-container border border-slate-400 w-full pb-[80px]"
    >
      <div className="progress-conatiner mt-3">
        <div className="w-full bg-slate-50 h-3 rounded-full">
          <div className="w-[78%] h-full bg-secondaryColor rounded-full"></div>
        </div>
        <p className="text-center mt-1">Step-3</p>
      </div>

      <div className="form-component mt-8">
        <h1 className="text-center text-3xl font-medium">Survey Form</h1>
        <div className="max-w-[430px] mx-auto border border-red-500">
          <form className="my-8 flex flex-col gap-y-4 ">
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
          </form>
          <div className="flex justify-end">
            <button className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300 mr-5">
              Back
            </button>
            <button className="bg-slate-50 py-1 w-20 rounded-[4px]  hover:bg-btnHover hover:text-white duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveryForm;
