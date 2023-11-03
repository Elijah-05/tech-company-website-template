import React from "react";

const EmailUSForm = () => {
  return (
    <div className="email-conatiner bg-gray-400 w-full max-w-[93%] sm:max-w-[80%] md:max-w-[60%] min-h-[530px] py-5 px-4 sm:px-8 rounded-lg ">
      <h1 className=" text-primaryColor text-3xl font-semibold ">Email us</h1>
      <form
        className="mt-10 grid gap-y-4"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="">
          <label className="" htmlFor="name">
            First Name
          </label>
          <input
            className=" block w-full py-2 indent-3 rounded-md outline-secondaryColor "
            id="name"
            name="subscriberName"
            type="text"
            placeholder="Enter your Name"
          ></input>
        </div>
        <div className="">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className=" block w-full py-2 indent-3 rounded-md outline-secondaryColor "
            id="email"
            type="email"
            name="subscriberEmail"
            placeholder="Enter your Name"
          ></input>
        </div>
        <div className="">
          <label className="" htmlFor="message">
            Your Message
          </label>
          <textarea
            className=" block w-full py-2 indent-3 rounded-md outline-secondaryColor "
            id="message"
            type="text"
            name="subscriberMessage"
            placeholder="Message"
            rows={5}
          ></textarea>
        </div>
        <div className="">
          <button
            className="bg-btnHover w-full py-3 rounded-xl hover:text-white font-bold text-primaryColor hover:bg-secondaryColor duration-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailUSForm;
