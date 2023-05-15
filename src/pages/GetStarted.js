import React from "react";
import { useState } from "react";
import Banner from "../component/Banner";
import bannerImage from "../images/get-started-page-banner.jpg";
import PersonalInformation from "../component/PersonalInformation";
import CompanyInformation from "../component/CompanyInformation";
import SurveryForm from "../component/SurveryForm";
import ConfirmationPage from "../component/ConfirmationPage";
import Successfull from "../component/Successfull";

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const progressColor = ["#FCA311", "#E0A319", "#94A22E", "#61A13C", "#12A052"];
  const stage = ["Step-1", "Step-2", "Step-3", "Step-4", "Finished!"];

  const handleNext = () => {
    if (step < 5 && progress < 100) {
      setStep(step + 1);
      setProgress(progress + 20);
    }
  };
  const handlePrev = () => {
    if (step > 1 && progress > 20) {
      setStep(step - 1);
      setProgress(progress - 20);
    }
  };

  const pageSwitcher = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
        break;
      case 2:
        return (
          <CompanyInformation handleNext={handleNext} handlePrev={handlePrev} />
        );
        break;
      case 3:
        return <SurveryForm handleNext={handleNext} handlePrev={handlePrev} />;
        break;
      case 4:
        return (
          <ConfirmationPage handleNext={handleNext} handlePrev={handlePrev} />
        );
        break;
      case 5:
        return <Successfull />;
        break;
      default:
        break;
    }
  };

  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="Get started with us" />
      <div className=" max-w-5xl min-h-screen mx-auto my-12 px-2 sm:px-0 ">
        <h1 className=" text-2xl sm:text-3xl text-center font-medium px-4 uppercase">
          Get in touch
        </h1>
        <p className=" text-sm sm:text-base text-center opacity-70 px-4 lg:px-0 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>

        <div className="form-conatiner mt-16 bg-gray-300 max-w-[750px] px-3 rounded-md sm:px-[44px] py-[20px] mx-auto duration-700 ">
          <div className="inner-container sm:border-2 border-slate-200 w-full pb-[80px]">
            <div className="progress-conatiner mt-3">
              <div className="w-full bg-slate-50 h-3 rounded-full">
                <div
                  className=" h-full bg-secondaryColor rounded-full duration-1000"
                  style={{
                    width: progress + "%",
                    backgroundColor: progressColor[step - 1],
                  }}
                ></div>
              </div>
              <p className="text-center mt-1">{stage[step - 1]}</p>
            </div>
            {pageSwitcher()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
