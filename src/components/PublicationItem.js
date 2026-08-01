import React from "react";
import Tag from "./Tag";

const PublicationItem = ({
  name,
  org,
  status,
  tags,
  description,
  collaborators,
  links,
}) => {
  return (
    <div className="bg-base-100 border border-base-content/10 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <h2 className="text-xl font-bold font-serif">{name}</h2>
      {org && <p className="text-primary font-medium mt-1">{org}</p>}
      {status && (
        <p className="text-sm text-base-content/60 italic mt-1">{status}</p>
      )}

      <p className="my-4 leading-relaxed text-base-content/85">{description}</p>

      {collaborators && (
        <p className="text-sm text-base-content/60 mb-4">
          <span className="font-semibold">Collaborators:</span> {collaborators}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <Tag key={t} item={t} />
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((linkItem, index) => (
            <a
              key={index}
              href={linkItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary btn-outline hover:scale-105 transition-transform duration-100"
            >
              {linkItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicationItem;
