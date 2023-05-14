import React from "react";
import Banner from "../component/Banner";
import bannerImage from "../images/contac-page-banner.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="contact us" />
      <div className=" max-w-5xl min-h-screen mx-auto my-12 ">
        <h1 className=" text-2xl sm:text-3xl text-center font-medium px-4 uppercase">
          Get in touch
        </h1>
        <p className=" text-sm sm:text-base text-center opacity-70 px-4 lg:px-0 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>
        <div className="contact-container mt-20 flex flex-col items-center gap-8 md:flex-row lg:gap-10 lg:px-0 sm:px-4  ">
          <div className=" bg-gray-400 w-full max-w-[93%] sm:max-w-[80%] md:max-w-[40%] min-h-[530px] py-5 px-4 sm:px-8 rounded-lg ">
            <h1 className=" text-primaryColor text-3xl font-semibold ">
              Contact Info
            </h1>
            <p className=" text-left mt-4 ">
              Lorem ipsum dolor sit amet consectetur. Massa lectus libero et
              eget feugiat elit.
            </p>
            <div className=" mt-8 grid gap-y-4 ">
              <div className="group flex  rounded-xl  cursor-pointer hover:-translate-y-1 duration-300 ">
                <div className=" w-7 h-7 text-xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-black">
                  <BsFillTelephoneFill />
                </div>
                <div className="max-w-[280px] sm:w-[200px] text-left ">
                  <h2 className="text-lg text-primaryColor font-bold mt-1 group-hover:text-black duration-300">
                    Lorem ipsum dolor sit
                  </h2>
                  <p className="  ">
                    Lorem ipsum dolor sit amet consectetur. Facilisi.
                  </p>
                </div>
              </div>
              <div className="group flex  rounded-xl  cursor-pointer hover:-translate-y-1 duration-300 ">
                <div className=" w-7 h-7 text-2xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-black">
                  <MdEmail />
                </div>
                <div className="max-w-[280px] sm:w-[200px] text-left ">
                  <h2 className="text-lg text-primaryColor font-bold mt-1 group-hover:text-black duration-300">
                    Lorem ipsum dolor sit
                  </h2>
                  <p className="  ">
                    Lorem ipsum dolor sit amet consectetur. Facilisi.
                  </p>
                </div>
              </div>
              <div className="group flex  rounded-xl cursor-pointer hover:-translate-y-1 duration-300 ">
                <div className=" w-7 h-7 text-3xl mt-1 mr-2 duration-300 flex justify-center items-center  text-primaryColor group-hover:text-black">
                  <MdLocationOn />
                </div>
                <div className="max-w-[280px] sm:w-[200px] text-left ">
                  <h2 className="text-lg text-primaryColor font-bold mt-1 group-hover:text-black duration-300">
                    Lorem ipsum dolor sit
                  </h2>
                  <p className="  ">
                    Lorem ipsum dolor sit amet consectetur. Facilisi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="email-conatiner bg-gray-400 w-full max-w-[93%] sm:max-w-[80%] md:max-w-[60%] min-h-[530px] py-5 px-4 sm:px-8 rounded-lg ">
            <h1 className=" text-primaryColor text-3xl font-semibold ">
              Email us
            </h1>
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
                  name="name"
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
                  name="email"
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
                  name="message"
                  placeholder="Message"
                  rows={5}
                ></textarea>
              </div>
              <div className="">
                <button className="bg-btnHover w-full py-3 rounded-xl text-white hover:shadow-md hover:bg-secondaryColor">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="my-16 lg:mt-20 w-full h-[300px] md:h-[350px] lg:h-[450px] bg-slate-300">
          <iframe
            title="google map"
            className=" w-full h-full shadow-lg border-primaryColor"
            src="https://www.google.com/maps/embed/v1/place?q=Efrata+Building+|+Bambis+|+ኤፍራታ+ህንጻ+|+ባምቢስ,+Equatorial+Guinea+Street,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
