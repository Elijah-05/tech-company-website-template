import React from "react";
import { GiCheckMark } from "react-icons/gi";

const PricingCard = ({ name, price, features }) => {
  const strPrice = price.toString();
  let money = price,
    cent = "00";
  if (strPrice.indexOf(".") !== -1) {
    money = strPrice.slice(0, strPrice.indexOf("."));
    cent = strPrice.slice(strPrice.indexOf(".") + 1);
  }

  return (
    <div
      className={`group pricing-container bg-slate-200  sm:w-[320px] max-w-[370px] min-h-[470px] rounded-xl flex flex-col justify-between py-6 px-4 lg:px-4 md:px-3  ${
        name.toLowerCase() === "pro"
          ? "scale-105 hover:scale-[1.06] shadow-xl"
          : "lg:hover:scale-[1.005] hover:shadow-xl"
      }  hover:-translate-y-2  duration-300 my-4 lg:my-0 mx-1 `}
    >
      <div className=" mt-3">
        <h2 className=" text-center text-2xl font-semibold duration-200 ">
          {name}
        </h2>
        <h1 className="group-hover:text-secondaryColor text-center font-medium duration-300 ">
          <span className=" text-4xl  ">{money}</span>.{cent}
        </h1>
        <p className=" text-center font-light ">
          <span className=" font-medium">Birr/</span>month
        </p>
        <ul className="mt-6 mb-10">
          {features?.map((feature, index) => {
            return (
              <li className=" flex items-center my-1" key={feature + index}>
                <GiCheckMark className="mr-3" /> {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className={`${
          name.toLowerCase() === "pro"
            ? "bg-secondaryColor group-hover:text-primaryColor"
            : "bg-primaryColor group-hover:text-secondaryColor"
        }  text-white font-semibold  py-3 rounded-full w-3/4 max-w-40 mx-auto duration-500 `}
      >
        Start Now!
      </button>
    </div>
  );
};

export default PricingCard;
