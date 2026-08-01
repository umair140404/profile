import React from "react";

const EducationCard = ({ cardItem }) => {
  return (
    <div className="bg-base-100 border border-base-content/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start flex-col lg:flex-row gap-1">
        <div>
          <h3 className="text-xl font-bold font-serif">{cardItem.title}</h3>
          <p className="font-semibold text-primary">{cardItem.institution}</p>
          <p className="text-base-content/70">{cardItem.location}</p>
        </div>
        <div className="shrink-0 lg:text-right">
          {cardItem.startDate && cardItem.endDate && (
            <p className="font-mono text-sm text-base-content/60">
              {cardItem.startDate} – {cardItem.endDate}
            </p>
          )}
          {cardItem.gpa && (
            <p className="mt-1 text-sm font-semibold text-primary">
              GPA: {cardItem.gpa}
            </p>
          )}
        </div>
      </div>
      <p className="mt-3 text-base-content/85">{cardItem.description}</p>
    </div>
  );
};

export default EducationCard;
