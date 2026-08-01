import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ProjectList from "../components/ProjectList";
import CardContainer from "../components/CardContainer";
import pastProjects from "../data/pastProjects.yaml";
import awards from "../data/awards.yaml";

const Projects = () => {
  return (
    <div className="space-y-14">
      <PageHeader
        title="Projects & Honors"
        subtitle="Earlier academic projects and awards."
      />

      <Section title="Past Projects">
        <ProjectList projects={pastProjects} />
      </Section>

      <Section title="Honors & Awards">
        <CardContainer cardData={awards} columns={1} />
      </Section>
    </div>
  );
};

export default Projects;
