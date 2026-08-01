import { useState } from "react";
import assetUrl from "../utils/asset";

const FALLBACK = "gallery/placeholder.svg";

// A single photo card: image on top, caption underneath. If the referenced
// image fails to load, it falls back to the placeholder so the grid never
// shows a broken image.
const PhotoCard = ({ image, caption, alt }) => {
  const [src, setSrc] = useState(assetUrl(image || FALLBACK));

  return (
    <figure className="bg-base-100 border border-base-content/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <div className="aspect-[4/3] w-full overflow-hidden bg-base-200">
        <img
          src={src}
          alt={alt || caption || "Photo"}
          loading="lazy"
          onError={() => {
            const fb = assetUrl(FALLBACK);
            if (src !== fb) setSrc(fb);
          }}
          className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      {caption && (
        <figcaption className="p-4 text-sm text-base-content/80 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PhotoCard;
