import React from "react";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="bg-base-200 min-h-screen min-w-screen relative">
      <Navbar />
      <div className="py-[20%] lg:py-[7%] lg:mx-[15%] mx-[5%]">{children}</div>
    </div>
  );
};

export default PageLayout;
