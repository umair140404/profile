import React from "react";
import PublicationItem from "./PublicationItem";

const PublicationList = ({ publications }) => {
  return (
    <div className="space-y-4">
      {publications.map((pub, index) => (
        <PublicationItem key={index} {...pub} />
      ))}
    </div>
  );
};

export default PublicationList;
