import React from "react";
import Banner from "../component/Banner";
import bannerImage from "../assets/images/contac-page-banner.jpg";
import ContactInfo from "../component/ContactInfo";
import EmailUSForm from "../component/EmailUSForm";
import MapLocation from "../component/MapLocation";

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
          <ContactInfo />
          <EmailUSForm />
        </div>
        <MapLocation />
      </div>
    </section>
  );
};

export default Contact;
