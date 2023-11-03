import React from "react";

const FooterList = ({ head, children }) => {
  return (
    <ul className=" mb-8 ">
      <h3 className=" text-lg font-semibold ">{head}</h3>
      {children}
    </ul>
  );
};

export default FooterList;
