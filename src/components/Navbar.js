import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import navItems from "../data/nav.yaml";
import profile from "../data/profile.yaml";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-primary bg-primary/10"
        : "text-base-content/70 hover:text-primary hover:bg-base-content/5"
    }`;

  return (
    <div className="navbar shadow-sm bg-base-100/90 backdrop-blur border-b border-base-content/10 fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl w-full mx-auto px-2 lg:px-4 flex items-center">
        {/* Brand */}
        <div className="flex-1">
          <NavLink
            to="/"
            className="font-serif text-lg lg:text-xl font-bold tracking-tight hover:text-primary transition-colors"
          >
            {profile.name}
          </NavLink>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end className={linkClass}>
              {item.heading}
            </NavLink>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="flex items-center gap-2 pl-2 lg:pl-4">
          <FaMoon
            size={15}
            className={isDarkTheme ? "text-white" : "text-black/60"}
          />
          <input
            type="checkbox"
            className="toggle toggle-sm"
            checked={!isDarkTheme}
            onChange={toggleTheme}
          />
          <FaSun size={17} className="text-yellow-500" />
        </div>

        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden pl-1">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
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
            className="menu menu-sm bg-base-100 dropdown-content space-y-1 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end className={linkClass}>
                  {item.heading}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
