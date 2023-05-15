import React from "react";
import Banner from "../component/Banner";
import bannerImage from "../images/get-started-page-banner.jpg";
import PersonalInformation from "../component/PersonalInformation";
import CompanyInformation from "../component/CompanyInformation";
import SurveryForm from "../component/SurveryForm";
import ConfirmationPage from "../component/ConfirmationPage";

const GetStarted = () => {
  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="Get started with us" />
      <div className=" max-w-5xl min-h-screen mx-auto my-12 ">
        <h1 className=" text-2xl sm:text-3xl text-center font-medium px-4 uppercase">
          Get in touch
        </h1>
        <p className=" text-sm sm:text-base text-center opacity-70 px-4 lg:px-0 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>

        <div className="form-conatiner mt-16 bg-gray-300 max-w-[750px] px-3 sm:px-[44px] py-[20px] mx-auto">
          <PersonalInformation />
          {/* <CompanyInformation /> */}
          {/* <SurveryForm /> */}
          {/* <ConfirmationPage /> */}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
