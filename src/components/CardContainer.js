import React from "react";
import Card from "./Card";

const CardContainer = ({ cardData }) => {
  return (
    <div className="space-y-4">
      {cardData.map((ed, index) => (
        <Card key={index} cardItem={ed} />
      ))}
    </div>
  );
};

export default CardContainer;
