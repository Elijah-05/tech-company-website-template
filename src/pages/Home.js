import React from "react";
import { services, features, testomonials } from "../data/data";
import Typical from "react-typical";
import WorkedWith from "../component/WorkedWith";
import Service from "../component/Service";
import Features from "../component/Features";
import Testimony from "../component/Testimony";
import sample from "../assets/video/connection-loop.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" ">
      <header className=" banner-h relative mobile-bg bg-cover bg-right flex flex-col items-center justify-center ">
        <video
          className=" hidden md:block opacity-70 w-full h-full object-cover "
          autoPlay
          loop
          muted
        >
          <source src={sample} type="video/mp4" />
        </video>
        <div className=" absolute flex flex-col justify-center items-center">
          <Typical
            className="hidden sm:block text-4xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl mb-12 uppercase text-white"
            steps={[
              "Build your Imagination",
              1000,
              "Launch Your Creative Businesss",
              1000,
              "Extend Your Runway",
              1000,
              "Tech Consultancy",
              1000,
            ]}
            loop={Infinity}
          />
          <h1 className=" text-3xl text-white font-semibold text-center mb-6 sm:hidden px-4">
            Launch Your Creative Business
          </h1>
          <Link to="started">
            <button className="group bg-secondaryColor w-56 py-3 px-4 sm:py-3 sm:px-8 sm:w-[320px] rounded-full hover:bg-btnHover hover:scale-[1.02] duration-300">
              <h2 className="text-lg sm:text-2xl group-hover:text-white duration-300">
                Get Started
              </h2>
            </button>
          </Link>
        </div>
      </header>
      <WorkedWith />
      <section
        id="services"
        className=" bg-primaryColor min-h-screen lg:px-3 scroll-mt-10"
      >
        <div className=" max-w-5xl px-1 sm:px-0 mx-auto mt-8 text-center py-16 ">
          <h1 className=" text-2xl text-white sm:text-3xl font-medium px-4 uppercase">
            Our Services
          </h1>
          <p className=" opacity-70 text-white text-sm sm:text-base px-4 lg:px-0  ">
            Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
            porttitor dolor integer. Donec faucibus pellentesque at morbi
            faucibus.
          </p>
          <div className=" lg:mt-8 px-3 sm:px-0 sm:mt-6  mx-auto  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 justify-between justify-items-center md:mt-8">
            {services.map((service) => (
              <Service
                key={service.key}
                icon={service.icon}
                title={service.name}
                desc={service.desc}
              />
            ))}
          </div>
          <p className=" text-sm sm:text-base opacity-70 px-4 lg:px-0 text-white font-light mt-10">
            Lorem ipsum dolor sit amet consectetur. Fringilla amet semper quam
            ultrices senectus consequat. Neque semper leo viverra commodo
            viverra hendrerit. Augue at in turpis gravida aliquam risus feugiat
            in nullam. Volutpat nec sed magna est lectus quam nulla. Enim
            praesent cursus nec sit ac ipsum adipiscing. Sed volutpat at
            tincidunt auctor et tortor pharetra enim. Nam at nec est viverra ac.
          </p>
        </div>
      </section>
      <section className="  ">
        <div className=" max-w-5xl px-1 sm:px-0 mx-auto mt-16 ">
          <h1 className=" text-2xl sm:text-3xl font-medium px-4 text-center uppercase">
            overall features
          </h1>
          <p className=" text-center px-4">
            Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
            porttitor dolor integer. Donec faucibus pellentesque at morbi
            faucibus. Tellus at integer dictum velit. Neque vestibulum vitae
            magna.
          </p>

          <div className="container mx-auto mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center lg:mt-10 sm:px-4 md:px-0 md:mt-12">
            {features.map((feature) => (
              <Features
                key={feature.key}
                title={feature.feature}
                desc={feature.desc}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="  ">
        <div className=" max-w-5xl px-1 sm:px-0 mx-auto py-16 ">
          <h1 className=" text-2xl sm:text-3xl font-medium px-4 text-center uppercase">
            Client testimonials
          </h1>
          <p className=" text-center px-4 ">
            Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
            porttitor dolor integer. Donec faucibus pellentesque at morbi
            faucibus.
          </p>

          <div className=" mt-10 mx-2 sm:mx-0 flex flex-col items-center lg:flex-row">
            {testomonials.map((testimony) => (
              <Testimony
                key={testimony.id}
                name={testimony.name}
                photo={testimony.photo}
                testimony={testimony.testimony}
                position={testimony.possition}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
