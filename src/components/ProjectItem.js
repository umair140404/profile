import React from "react";

const ProjectItem = ({ title, description, bulletPoints, type }) => {
  return (
    <div className="bg-base-100 border border-base-content/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <h3 className="text-xl font-bold font-serif">{title}</h3>
      {type && <p className="text-primary text-sm font-medium mb-3">{type}</p>}
      {description && <p className="mb-2">{description}</p>}
      <ul className="list-disc ml-5 space-y-1 text-base-content/85">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;
