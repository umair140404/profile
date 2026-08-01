import PageHeader from "../components/PageHeader";
import PublicationList from "../components/PublicationList";
import currentProjects from "../data/currentProjects.yaml";

const Research = () => {
  return (
    <div>
      <PageHeader
        title="Research"
        subtitle="Current work in robotics, embodied AI, and AI for collaborative learning."
      />
      <PublicationList publications={currentProjects} />
    </div>
  );
};

export default Research;
