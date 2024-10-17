import React from "react";

const ProjectItem = ({ title, description, bulletPoints, type }) => {
  return (
    <div className="bg-base-300 rounded-lg p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <h3 className="text-lg italic mb-2">{type}</h3>
      <p className="mb-2">{description}</p>
      <ul className="list-disc ml-5">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
