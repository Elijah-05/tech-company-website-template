import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import navBarLogoDesktop from "./images/addis-logo.png";
import navBarLogoMobile from "./images/addis-icon.png";
import Button from "./component/Button";
import Footer from "./component/Footer";

const Layout = () => {
  const [dimNav, setDimNav] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 500) {
        setDimNav(true);
      } else setDimNav(false);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  });

  const handleMenu = (from) => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("list");
    if (window.screen.width < 768) {
      hamburgerBtn.classList.toggle("toggle-btn");
      mobileMenu.classList.toggle("responsive-nav");
    }
    if (from !== "menu") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav
        className={`fixed ${
          dimNav ? "bg-primaryColor shadow-lg" : "bg-transparent"
        } top-0 left-0 right-0 z-50 duration-700`}
      >
        <div className="container px-3 md:px-8  max-w-5xl  mx-auto flex items-center justify-between h-16 ">
          <div
            className=" lg:w-40 hover:scale-[1.03] duration-200 "
            onClick={() => window.scrollTo(0, 0)}
          >
            <Link to="/">
              <img
                className="w-32 hidden sm:flex"
                src={navBarLogoDesktop}
                alt="company logo"
              />

              <img
                className="w-12 flex sm:hidden "
                src={navBarLogoMobile}
                alt="company logo"
              />
            </Link>
          </div>
          <ul id="list" className="items-center gap-4 hidden md:flex ">
            <li
              className="text-white active:text-secondaryColor hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="/">HOME</Link>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <a href="#services">SERVICES</a>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="pricing">PRICING</Link>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="about">ABOUT US</Link>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="contact">CONTACT</Link>
            </li>
            <Link to="started" onClick={handleMenu}>
              <Button text="Get Started" />
            </Link>
          </ul>
          <button
            id="hamburger-button"
            className="md:hidden cursor-pointer relative w-8 h-6 mr-1 ml-4"
            onClick={() => {
              handleMenu("menu");
            }}
          >
            <div
              className='bg-white w-8 h-1 absolute transition-all duration-500 before:content-[""] before:bg-white before:w-8 before:absolute before:h-1 before:-translate-y-3 before:-translate-x-4 before:transition-all before:duration-500
                    after:content-[""] after:bg-white after:w-8 after:absolute after:h-1 after:translate-y-3 after:-translate-x-4 after:transition-all after:duration-500'
            ></div>
          </button>
        </div>
      </nav>
      <Outlet className="min-h-screen " />
      <Footer />
    </>
  );
};

export default Layout;
