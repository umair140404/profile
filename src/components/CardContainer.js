import React from "react";
import Card from "./Card";

const CardContainer = ({ cardData }) => {
  return (
    <div className="space-y-4">
      {cardData.map((item, index) => (
        <Card key={index}>{item}</Card>
      ))}
    </div>
  );
};

export default CardContainer;
