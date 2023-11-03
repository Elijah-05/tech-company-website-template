import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

const Layout = () => {
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
      <Navigation handleMenu={handleMenu} />
      <Outlet className="min-h-screen " />
      <Footer />
    </>
  );
};

export default Layout;
