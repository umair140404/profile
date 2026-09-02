import socials from "../data/socials.yaml";
import profile from "../data/profile.yaml";
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import assetUrl from "../utils/asset";

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  scholar: SiGooglescholar,
};

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:justify-start justify-center">
      {socials.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            aria-label={link.name}
            className="flex items-center gap-1.5 text-base-content/80 hover:text-primary transition-colors duration-100"
          >
            {Icon && <Icon className="w-5 h-5" />}
            <span className="text-sm font-medium">{link.label || link.name}</span>
          </a>
        );
      })}
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
