import socials from "../data/socials.yaml";
import profile from "../data/profile.yaml";
import { useTheme } from "./ThemeContext";
import assetUrl from "../utils/asset";

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer className="border-t border-base-content/10 bg-base-100">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-base-content/60 text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="link link-hover text-sm text-base-content/70"
          >
            {profile.email}
          </a>
          {socials.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <img
                src={assetUrl(isDarkTheme ? link.darkThemeIcon : link.icon)}
                alt={`${link.name} icon`}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
