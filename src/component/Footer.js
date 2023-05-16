import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" bg-primaryColor pt-8 pb-10 px-6 ">
      <div className=" pl-4 md:pl-12  lg:pl-0 max-w-5xl mx-auto text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-cent ">
        <ul className=" mb-8">
          <h3 className=" text-lg font-semibold ">About us</h3>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor </a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor sit</a>
          </li>
          <div className=" flex gap-3 mt-4">
            <FaFacebookF className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
            <FaInstagram className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
            <FaTelegramPlane className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
            <FaLinkedinIn className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
            <FaTwitter className=" text-base cursor-pointer hover:text-secondaryColor hover:scale-125 hover:-translate-y-1 duration-200" />
          </div>
        </ul>
        <ul className=" mb-8 ">
          <h3 className=" text-lg font-semibold ">Product and Services</h3>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor </a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor sit</a>
          </li>
        </ul>
        <ul className=" mb-8 ">
          <h3 className=" text-lg font-semibold ">Privacy Policy</h3>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor </a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor sit</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem sit</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolo</a>
          </li>
        </ul>
        <ul className=" mb-8 ">
          <h3 className=" text-lg font-semibold ">Related Links</h3>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor </a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum</a>
          </li>
          <li className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-100">
            <a href="#sd">Lorem ipsum dolor sit</a>
          </li>
        </ul>
      </div>
      <div className="mt-4 text-white text-center text-sm font-light ">
        <p className=" opacity-70 ">
          Copyright &copy;{date.getFullYear()} All rights reserved!
        </p>
        <p className="  ">
          <span className="opacity-70">
            This template is designed & developed by
          </span>{" "}
          <a
            className="opacity-70 text-secondaryColor font-semibold hover:opacity-100 duration-300 "
            href="https://ellaportfolio.netlify.app/"
          >
            Elyas Abebe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
