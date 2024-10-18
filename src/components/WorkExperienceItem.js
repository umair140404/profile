import React from "react";
import { useTheme } from "./ThemeContext";

const WorkExperienceItem = ({
  year,
  title,
  description,
  isStart,
  company,
  href,
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <li>
      <hr className={isDarkTheme ? "bg-gray-400" : ""} />
      <div className={`timeline-middle`}>
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
        className={`${isStart ? "timeline-start" : "timeline-end"}`}
      >
        <time className="font-mono italic">{year}</time>
        {company && (
          <div className="text-lg">
            <a
              className="font-bold link link-primary link-hover"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
            >
              {company}
            </a>{" "}
            - {title}
          </div>
        )}
        <ul
          className="md:max-w-[45vw]"
          style={{ listStyleType: "disc", paddingLeft: "20px" }}
        >
          {description !== undefined &&
            description.map((exp, index) => {
              return (
                <li className="mb-1" key={index}>
                  {exp}
                </li>
              );
            })}
        </ul>
      </div>
      <hr className={isDarkTheme ? "bg-gray-400" : ""} />
    </li>
  );
};

export default WorkExperienceItem;
