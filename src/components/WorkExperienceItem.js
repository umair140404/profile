import React from "react";
import { useTheme } from "./ThemeContext";

const WorkExperienceItem = ({
  year,
  title,
  description,
  isStart,
  company,
  location,
  locationType,
  href,
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <li>
      <hr className={isDarkTheme ? "bg-gray-500" : ""} />
      <div className="timeline-middle text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <circle cx="10" cy="10" r="8" />
        </svg>
      </div>
      <div
        style={{ marginBottom: "3rem" }}
        className={isStart ? "timeline-start" : "timeline-end"}
      >
        <time className="font-mono text-sm text-base-content/60">{year}</time>
        {company && (
          <div className="text-lg mt-0.5">
            <a
              className="font-bold link link-primary link-hover"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
            >
              {company}
            </a>{" "}
            <span className="text-base-content/80">- {title}</span>
          </div>
        )}
        {location && locationType && (
          <div className="flex flex-wrap gap-x-2 text-sm italic text-base-content/60">
            <span>{location}</span>
            <span>·</span>
            <span>{locationType}</span>
          </div>
        )}
        <ul
          className="mt-2 text-base-content/85"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          {description !== undefined &&
            description.map((exp, index) => (
              <li className="mb-1" key={index}>
                {exp}
              </li>
            ))}
        </ul>
      </div>
      <hr className={isDarkTheme ? "bg-gray-500" : ""} />
    </li>
  );
};

export default WorkExperienceItem;
