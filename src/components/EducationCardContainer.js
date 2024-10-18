import React from "react";
import EducationCard from "./EducationCard";

const EducationCardContainer = ({ cardData }) => {
  return (
    <div className="space-y-4">
      {cardData.map((ed, index) => (
        <EducationCard key={index} cardItem={ed} />
      ))}
    </div>
  );
};

export default EducationCardContainer;
