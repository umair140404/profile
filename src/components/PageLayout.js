import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const PageLayout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="bg-base-200 min-h-screen min-w-screen relative">
      <button
        onClick={toggleTheme}
        className="btn btn-primary w-[50px] rounded-full fixed bottom-4 right-4 flex items-center justify-center p-2 shadow-md z-[9999] hover:scale-110 transition-transform duration-100"
      >
        {isDarkTheme ? (
          <FaMoon className="text-white" />
        ) : (
          <FaSun className="text-yellow-400" />
        )}
      </button>
      <div className="py-[5%] lg:mx-[20%] mx-[5%]">{children}</div>
    </div>
  );
};

export default PageLayout;
