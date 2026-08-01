import React from "react";

// Renders a responsive grid of {title, description} cards.
// Used for research interests and honors & awards.
const CardContainer = ({ cardData, columns = 2 }) => {
  const gridCols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
      {cardData.map((item, index) => (
        <div
          key={index}
          className="bg-base-100 border border-base-content/10 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
        >
          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
          <p className="text-base-content/80 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
