import socials from "../data/socials.yaml";
import profile from "../data/profile.yaml";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  scholar: SiGooglescholar,
};

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10 bg-base-100">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-base-content/60 text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="link link-hover text-sm text-base-content/70"
          >
            {profile.email}
          </a>
          {socials.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
