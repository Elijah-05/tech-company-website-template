import React from "react";
import FooterList from "./FooterList";
import SocialMediaIconRow from "./SocialMediaIconRow";
import { footerListText } from "../data/data";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" bg-primaryColor pt-8 pb-10 px-6 ">
      <div className=" pl-4 md:pl-12  lg:pl-0 max-w-5xl mx-auto text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-cent ">
        <FooterList
          head={"About us"}
          children={
            <>
              {footerListText.about_us.map((list, index) => {
                return (
                  <li
                    className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-500 cursor-pointer"
                    key={list + index}
                  >
                    {list}
                  </li>
                );
              })}
              <SocialMediaIconRow />
            </>
          }
        />
        <FooterList
          head={"Product and Services"}
          children={
            <>
              {footerListText.product_and_services.map((list, index) => {
                return (
                  <li
                    className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-500 cursor-pointer"
                    key={list + index}
                  >
                    {list}
                  </li>
                );
              })}
            </>
          }
        />
        <FooterList
          head={"Privacy Policy"}
          children={
            <>
              {footerListText.privacy_policy.map((list, index) => {
                return (
                  <li
                    className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-500 cursor-pointer"
                    key={list + index}
                  >
                    {list}
                  </li>
                );
              })}
            </>
          }
        />
        <FooterList
          head={"Related Links"}
          children={
            <>
              {footerListText.related_links.map((list, index) => {
                return (
                  <li
                    className=" text-sm font-light my-1 opacity-75 hover:opacity-100 hover:text-secondaryColor duration-500 cursor-pointer"
                    key={list + index}
                  >
                    {list}
                  </li>
                );
              })}
            </>
          }
        />
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
