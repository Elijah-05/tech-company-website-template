import React from "react";
import { useState, useRef } from "react";
import Banner from "../component/Banner";
import bannerImage from "../assets/images/get-started-page-banner.jpg";
import PersonalInformation from "../component/PersonalInformation";
import CompanyInformation from "../component/CompanyInformation";
import SurveryForm from "../component/SurveryForm";
import ConfirmationPage from "../component/ConfirmationPage";
import Successfull from "../component/Successfull";

const GetStarted = () => {
  const [user, setUser] = useState({
    name: "",
    position: "",
    email: "",
    companyName: "",
    companyLocation: "",
    webDesign: false,
    webDevelopment: false,
    webHosting: false,
    systemDevelopment: false,
    heardFrom: "",
    isHelpful: "",
    comment: "",
  });
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const progressColor = ["#FCA311", "#E0A319", "#94A22E", "#61A13C", "#12A052"];
  const stage = ["Step-1", "Step-2", "Step-3", "Step-4", "Finished!"];
  const pageHead = [
    "Personal Information",
    "Company Information",
    "Survey Form",
    "Confirm Your Information",
  ];
  const sectionRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheck = (event) => {
    const { name } = event.target;
    setUser({ ...user, [name]: !user[name] });
  };

  const handleNext = () => {
    if (step < 3 && progress < 100) {
      setStep(step + 1);
      setProgress(progress + 25);
    } else if (step === 3) {
      setStep(step + 1);
      setProgress(progress + 20);
    }
  };
  const handlePrev = () => {
    if (step > 1 && progress > 25) {
      setStep(step - 1);
      setProgress(progress - 25);
    }
  };

  const pageSwitcher = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            handleNext={handleNext}
            handlePrev={handlePrev}
            user={user}
            setUser={setUser}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <CompanyInformation
            user={user}
            setUser={setUser}
            handleInputChange={handleInputChange}
            handleCheck={handleCheck}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 3:
        return (
          <SurveryForm
            user={user}
            setUser={setUser}
            handleInputChange={handleInputChange}
            handleCheck={handleCheck}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );

      case 4:
        return (
          <ConfirmationPage
            user={user}
            setUser={setUser}
            handleInputChange={handleInputChange}
            handleCheck={handleCheck}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 5:
        return <Successfull />;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProgress(100);
    setStep(5);
    scrollToSection();
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="Get started with us" />
      <div className=" max-w-5xl min-h-screen mx-auto my-16 px-2 sm:px-0 ">
        <h1 className=" text-2xl sm:text-3xl text-center font-medium px-4 uppercase">
          Get in touch
        </h1>
        <p className=" text-sm sm:text-base text-center opacity-70 px-4 lg:px-0 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>

        <div
          ref={sectionRef}
          className=" scroll-mt-24 form-conatiner mt-8 bg-gray-300 max-w-[750px] px-3 rounded-md sm:px-[44px] py-[20px] mx-auto duration-700 "
        >
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

            <div className=" animate-slow-slide-l form-component mt-8 duration-700">
              <h1 className="text-center text-3xl font-medium">
                {pageHead[step - 1]}
              </h1>
              <div className=" max-w-[430px] mx-auto  ">
                <form
                  className="my-8 flex flex-col gap-y-4 "
                  onSubmit={(e) => handleSubmit(e)}
                >
                  {pageSwitcher()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
