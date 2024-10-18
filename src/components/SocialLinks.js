import socials from "../data/socials";
import { IoMdDownload } from "react-icons/io";
import { useTheme } from "./ThemeContext";

const SocialLinks = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="flex flex-wrap items-center gap-4 lg:justify-start justify-center">
      {socials.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={link.name}
        >
          <img
            src={isDarkTheme ? link.darkThemeIcon : link.icon}
            alt={`${link.name} icon`}
            className="w-10 h-10 hover:scale-110 transition-transform duration-200"
          />
        </a>
      ))}
      <a
        href="/CV_UmairYousaf.pdf"
        download
        className="btn btn-primary flex items-center gap-2 hover:scale-105 transition-transform duration-200"
      >
        <IoMdDownload className="h-6 w-6" />
        Résumé
      </a>
    </div>
  );
};

export default SocialLinks;
