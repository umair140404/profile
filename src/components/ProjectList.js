import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          bulletPoints={project.bulletPoints}
          type={project.type}
        />
      ))}
    </div>
  );
};

export default ProjectList;
