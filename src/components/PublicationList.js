import React from "react";
import PublicationItem from "./PublicationItem";

const PublicationList = ({ publications }) => {
  return (
    <div>
      {publications.map((pub, index) => (
        <PublicationItem key={index} {...pub} />
      ))}
    </div>
  );
};

export default PublicationList;
