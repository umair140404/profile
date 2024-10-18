import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperienceTimeline = ({ experience }) => {
  return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
      {experience.map((exp, index) => (
        <WorkExperienceItem
          key={index}
          year={exp.year}
          title={exp.title}
          description={exp.description}
          company={exp.company}
          isStart={false}
          href={exp.href}
        />
      ))}
    </ul>
  );
};

export default WorkExperienceTimeline;
