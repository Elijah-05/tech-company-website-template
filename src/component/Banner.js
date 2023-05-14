import React from "react";

const Banner = ({ heading, backgroundImg }) => {
  return (
    <header
      className="banner-h flex flex-col items-center justify-center "
      style={{
        background: `linear-gradient(0deg, rgba(14, 22, 41, 0.8), rgba(25, 37, 78, 0.7) ), url('${backgroundImg}') `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className=" text-3xl font-semibold md:text-4xl lg:text-5xl mb-12 uppercase text-white mt-16 ">
        {heading}
      </h1>
    </header>
  );
};

Banner.defaultProps = {
  heading: "Default Heading",
};

export default Banner;
