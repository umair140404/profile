import PageHeader from "../components/PageHeader";
import Markdown from "../components/Markdown";
import PhotoCard from "../components/PhotoCard";
import life from "../data/life.yaml";

const Life = () => {
  // Show most recent photos first. Copy before reversing — reverse() mutates
  // in place, and mutating the shared imported array breaks under React
  // StrictMode's double render (it would reverse twice = no change).
  const photos = [...(life.photos || [])].reverse();

  return (
    <div>
      <PageHeader title="Life" />

      {life.intro && (
        <Markdown className="text-md md:text-lg text-base-content/85 mb-10">
          {life.intro}
        </Markdown>
      )}

      {photos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, index) => (
            <PhotoCard key={index} {...photo} />
          ))}
        </div>
      ) : (
        <p className="text-base-content/60">
          Nothing here yet - check back soon.
        </p>
      )}
    </div>
  );
};

export default Life;
