import React from "react";

const MapLocation = () => {
  return (
    <div className="my-16 lg:mt-20 w-full h-[300px] md:h-[350px] lg:h-[450px] bg-slate-300">
      <iframe
        title="google map"
        className=" w-full h-full shadow-lg border-primaryColor"
        src="https://www.google.com/maps/embed/v1/place?q=Efrata+Building+|+Bambis+|+ኤፍራታ+ህንጻ+|+ባምቢስ,+Equatorial+Guinea+Street,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
    </div>
  );
};

export default MapLocation;
