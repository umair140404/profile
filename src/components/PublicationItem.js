import React from "react";

const PublicationItem = ({ name, status, authors, abstract, links }) => {
  return (
    <div className="bg-base-300 rounded-lg p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="italic">{status}</p>
      <p>
        Authors: <strong>Umair Yousaf</strong>, {authors}
      </p>
      <p className="my-4 italic">
        <strong>Abstract: </strong>
        {abstract}
      </p>

      <div className="flex flex-wrap gap-2">
        {links.map((linkItem, index) => (
          <div
            key={index}
            className="btn btn-sm btn-primary hover:scale-105 transition-transform duration-100"
          >
            <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
              {linkItem.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationItem;
