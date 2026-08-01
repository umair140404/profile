import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import EducationCardContainer from "../components/EducationCardContainer";
import WorkExperienceTimeline from "../components/WorkExperienceTimeline";
import education from "../data/education.yaml";
import experience from "../data/experience.yaml";
import teaching from "../data/teaching.yaml";

const Experience = () => {
  return (
    <div className="space-y-14">
      <PageHeader
        title="Experience & Education"
        subtitle="Research, industry, and teaching."
      />

      <Section title="Education">
        <EducationCardContainer cardData={education} />
      </Section>

      <Section title="Work Experience">
        <WorkExperienceTimeline experience={experience} />
      </Section>

      <Section title="Teaching">
        <WorkExperienceTimeline experience={teaching} />
      </Section>
    </div>
  );
};

export default Experience;
