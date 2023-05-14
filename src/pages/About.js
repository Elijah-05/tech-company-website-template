import React from "react";
import Banner from "../component/Banner";
import bannerImage from "../images/about-us-banner.jpg";
import office from "../images/about-us-office.jpg";
import { staffData } from "../data";
import Staff from "../component/Staff";
import WorkedWith from "../component/WorkedWith";

const About = () => {
  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="Who We Are?" />
      <div className=" max-w-5xl mx-auto my-12 text-center lg:px-2">
        <h1 className=" text-2xl sm:text-3xl font-medium px-4 uppercase">
          About us
        </h1>
        <p className=" text-sm sm:text-base opacity-70 px-4 lg:px-0 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>
        <div className="about-us-container mt-12 flex flex-col items-center md:items-start md:flex-row gap-5 lg:gap-10 px-4 md:px-2 lg:px-0 ">
          <div className=" md:min-w-[250px] md:max-w-[450px] h-[450px] md:h-[550px] bg-primaryColor ">
            <img
              className=" h-full w-full object-cover "
              src={office}
              alt="addis tech office"
            />
          </div>
          <div className=" max-w-[550px] ">
            <p className=" text-justify">
              Lorem ipsum dolor sit amet consectetur. Viverra pellentesque
              tristique vel tellus elit vel bibendum libero. Quam risus sit nibh
              tellus id tincidunt vulputate. Molestie aliquet morbi sed feugiat
              cursus elit pretium eget elementum. Imperdiet congue ullamcorper
              tincidunt pellentesque. Turpis id turpis libero eu cras. Auctor
              cursus facilisis magna commodo eu ultrices amet sit at. Pharetra
              sit justo viverra id faucibus. Pretium vel et enim faucibus
              suspendisse elit. Pharetra aliquam elit mauris id volutpat. Amet
              egestas ut imperdiet quam nunc dui gravida laoreet. Platea
              lobortis est erat tristique cras aliquam arcu at. Sed gravida
              mollis nulla sit ullamcorper et turpis ullamcorper. Proin mauris a
              vulputate viverra ante egestas. Tellus tellus viverra nunc aliquam
              aenean est massa. Dictum vitae est aliquet massa. Volutpat sit
              amet vestibulum massa etiam vulputate nunc. Ornare ipsum dui
              elementum aliquam mauris consequat. Et in eget in ornare egestas
              odio facilisi. Erat molestie vel nec donec mi mauris. Vitae
              lobortis etiam porttitor neque eu. Cursus eros est ac aliquet.
              Proin quis urna cras viverra. Ut mi nunc volutpat accumsan quam
              sit congue duis pellentesque. Aliquet malesuada tincidunt est est
              vivamus consectetur dolor netus leo. A eget fermentum sit mauris.
            </p>
          </div>
        </div>
        <div className=" members-container mt-12 ">
          <h1 className=" text-2xl sm:text-3xl font-medium px-4 uppercase">
            meet our staff
          </h1>
          <p className=" text-sm sm:text-base opacity-70 px-4 lg:px-0 ">
            Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
            porttitor dolor integer. Donec faucibus pellentesque at morbi
            faucibus. Dignissim enim semper porttitor dolor integer.
          </p>
          <div className=" mt-[260px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-[260px] sm:gap-y-[270px] ">
            {staffData.map((staf) => (
              <Staff
                key={staf.id}
                photo={staf.photo}
                name={staf.name}
                position={staf.position}
              />
            ))}
          </div>
        </div>
      </div>
      <WorkedWith />
    </section>
  );
};

export default About;
