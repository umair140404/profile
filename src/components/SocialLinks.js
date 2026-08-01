import socials from "../data/socials.yaml";
import profile from "../data/profile.yaml";
import { IoMdDownload } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import assetUrl from "../utils/asset";

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
          aria-label={link.name}
        >
          <img
            src={assetUrl(isDarkTheme ? link.darkThemeIcon : link.icon)}
            alt={`${link.name} icon`}
            className="w-9 h-9 hover:scale-110 transition-transform duration-100"
          />
        </a>
      ))}
      <a
        href={assetUrl(profile.resume)}
        download
        className="btn btn-primary btn-sm flex items-center gap-2 hover:scale-105 transition-transform duration-100"
      >
        <IoMdDownload className="h-5 w-5" />
        Résumé
      </a>
    </div>
  );
};

export default SocialLinks;
