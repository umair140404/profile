import SocialLinks from "./SocialLinks";
import profile from "../data/profile.yaml";
import assetUrl from "../utils/asset";

const Hero = () => {
  return (
    <div className="card bg-base-100 border border-base-content/10 shadow-sm rounded-2xl p-6 lg:p-10">
      <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={assetUrl(profile.photo)}
            className="w-[220px] h-[220px] lg:w-[250px] lg:h-[250px] rounded-full object-cover ring-4 ring-primary/20"
            alt={profile.name}
          />
        </div>
        <div className="lg:w-2/3 space-y-5 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg text-primary font-medium">{profile.tagline}</p>
          </div>

          {profile.affiliations && (
            <ul className="flex flex-wrap gap-x-6 gap-y-1 justify-center lg:justify-start text-sm text-base-content/70">
              {profile.affiliations.map((a) => (
                <li key={a.label}>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold link link-hover text-base-content"
                  >
                    {a.label}
                  </a>
                  {a.detail && <span className="text-base-content/50"> · {a.detail}</span>}
                </li>
              ))}
            </ul>
          )}

          <div className="text-md">
            <a
              href={`mailto:${profile.email}`}
              className="link link-primary link-hover"
            >
              {profile.email}
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;
