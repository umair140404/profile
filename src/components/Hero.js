import SocialLinks from "./SocialLinks";
import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="hero bg-base-100 p-6 rounded-lg">
      <div className="flex flex-col items-center justify-center w-full lg:flex-row-reverse">
        <div className="lg:w-1/3 flex flex-col items-center lg:items-end">
          <img
            src="profile-pic.jpg"
            className="w-[250px] h-[250px] rounded-full"
            alt="Profile"
          />
        </div>
        <div className="lg:w-2/3 space-y-8 lg:mt-0 mt-8">
          <h1 className="lg:text-5xl lg:text-left text-4xl text-center font-bold">
            Umair Yousaf
          </h1>
          <div className="space-y-4">
            <div className="lg:text-left text-center">
              <div className="text-md">
                <div className="inline-block">
                  <a
                    href="mailto:23100053@lums.edu.pk"
                    className="link link-primary link-hover"
                  >
                    23100053@lums.edu.pk
                  </a>{" "}
                  <strong
                    className={`inline-block ${
                      isDarkTheme ? "text-red-500" : "text-red-600"
                    }`}
                  >
                    (primary)
                  </strong>
                </div>
              </div>

              <div className="text-md">
                <a
                  href="mailto:umair2000yousaf@gmail.com"
                  className="link link-primary link-hover"
                >
                  umair2000yousaf@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
