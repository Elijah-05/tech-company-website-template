import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/addis-tech-logo.png";
import Button from "../component/Button";
import Footer from "../component/Footer";

const Layout = () => {
  const handleMenu = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("list");
    if (window.screen.width < 768) {
      hamburgerBtn.classList.toggle("toggle-btn");
      mobileMenu.classList.toggle("responsive-nav");
    }
  };

  return (
    <>
      <nav className=" bg-primaryColor sticky top-0 z-50 shadow-lg ">
        <div className="container px-2 lg:px-0 max-w-5xl  mx-auto flex items-center justify-between h-16 ">
          <div className=" w-32 sm:w-36 lg:w-40 hover:scale-[1.03] duration-200 ">
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
          </div>
          <ul id="list" className="items-center gap-4 hidden md:flex ">
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
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
              <Link to="/pricing">PRICING</Link>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="/about">ABOUT US</Link>
            </li>
            <li
              className="text-white hover:text-secondaryColor duration-200 pt-1"
              onClick={handleMenu}
            >
              <Link to="/contact">CONTACT</Link>
            </li>
            <Button text="Get Started" />
          </ul>
          <button
            id="hamburger-button"
            className="md:hidden cursor-pointer relative w-8 h-8 mr-1 ml-4"
            onClick={handleMenu}
          >
            <div
              className='bg-white w-8 h-1 absolute transition-all duration-500 before:content-[""] before:bg-white before:w-8 before:absolute before:h-1 before:-translate-y-3 before:-translate-x-4 before:transition-all before:duration-500
                    after:content-[""] after:bg-white after:w-8 after:absolute after:h-1 after:translate-y-3 after:-translate-x-4 after:transition-all after:duration-500'
            ></div>
          </button>
        </div>
      </nav>
      <Outlet className=" min-h-screen " />
      <Footer />
    </>
  );
};

export default Layout;
