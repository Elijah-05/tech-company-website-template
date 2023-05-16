import React from "react";

const SurveryForm = ({
  user,
  setUser,
  handleInputChange,
  handleCheck,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="animate-slow-slide-l duration-700 gap-y-4 grid">
      <div className="flex flex-col">
        <label htmlFor="hear-from">Where Did You Hear About us?</label>
        <select
          className="py-2 outline-secondaryColor rounded-sm"
          id="hear-from"
          name="heardFrom"
          value={user.heardFrom}
          onChange={handleInputChange}
          autoFocus
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
      <div className="mt-4 flex justify-end">
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
          Next
        </button>
      </div>
    </div>
  );
};

export default SurveryForm;
