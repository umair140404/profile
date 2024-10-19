import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import navbarItems from "../data/navbarItems";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="navbar shadow-sm bg-base-100 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm bg-base-100 dropdown-content space-y-4 rounded-box z-[1] mt-3 w-52 px-2 py-4 shadow-xl`}
          >
            {navbarItems.map((item) => {
              return (
                <li>
                  <a href={`#${item.id}`}>{item.heading}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbarItems.map((item) => {
            return (
              <li>
                <a href={`#${item.id}`}>{item.heading}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 justify-between p-1">
          <FaMoon
            size={16}
            className={`${isDarkTheme ? "text-white" : "text-black"}`}
          />
          <input
            type="checkbox"
            className="toggle"
            checked={!isDarkTheme ? true : false}
            onClick={toggleTheme}
          />
          <FaSun size={18} className={`text-yellow-500`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
