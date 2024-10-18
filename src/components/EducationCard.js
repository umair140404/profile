import React from "react";

const EducationCard = ({ cardItem }) => {
  return (
    <div className="bg-base-300 rounded-lg p-4">
      <div className="flex justify-between items-top flex-col lg:flex-row">
        <div>
          <h3 className="text-xl font-bold">{cardItem.title}</h3>
          <p className="font-semibold">{cardItem.institution}</p>
          <p className="">{cardItem.location}</p>
        </div>
        <div className="">
          {cardItem.startDate && cardItem.endDate && (
            <p className="font-mono italic lg:text-right">
              {cardItem.startDate} - {cardItem.endDate}
            </p>
          )}
        </div>
      </div>
      <p className="mt-2">{cardItem.description}</p>
    </div>
  );
};

export default EducationCard;
