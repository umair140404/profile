import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-5 lg:px-8 pt-28 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
