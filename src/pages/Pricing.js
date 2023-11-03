import React from "react";
import Banner from "../component/Banner";
import bannerImage from "../images/pricing-page-banner.png";
import PricingCard from "../component/PricingCard";
import { pricing_plan } from "../data";

const Pricing = () => {
  return (
    <section className=" min-h-screen ">
      <Banner backgroundImg={bannerImage} heading="Pricing" />
      <div className=" max-w-5xl px-1 sm:px-0 mx-auto py-16 ">
        <h1 className=" text-2xl sm:text-3xl font-medium px-4 text-center uppercase">
          Our best pricing
        </h1>
        <p className=" text-center px-4 ">
          Lorem ipsum dolor sit amet consectetur. Dignissim enim semper
          porttitor dolor integer. Donec faucibus pellentesque at morbi
          faucibus.
        </p>

        <div className=" mt-10 mx-2 sm:mx-0 flex flex-col items-stretch md:flex-row justify-between ">
          <PricingCard
            name={"Starter"}
            price={699}
            features={pricing_plan.starter}
          />
          <PricingCard
            name={"Pro"}
            price={1650.99}
            features={pricing_plan.pro}
          />
          <PricingCard
            name={"Premium"}
            price={2499.99}
            features={pricing_plan.premium}
          />
        </div>

        <p className=" text-center px-4 mt-12">
          Lorem ipsum dolor sit amet consectetur. Fringilla amet semper quam
          ultrices senectus consequat. Neque semper leo viverra commodo viverra
          hendrerit. Augue at in turpis gravida aliquam risus feugiat in nullam.
          Volutpat nec sed magna est lectus quam nulla. Enim praesent cursus nec
          sit ac ipsum adipiscing. Sed volutpat at tincidunt auctor et tortor
          pharetra enim. Nam at nec est viverra ac.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
