import Hero from "../components/Hero";
import about from "../data/about";
import EducationCardContainer from "../components/EducationCardContainer";
import HeadingAndContent from "../components/HeadingAndContent";
import WorkExperienceTimeline from "../components/WorkExperienceTimeline";
import education from "../data/education";
import experience from "../data/experience";
import teachingExperience from "../data/teachingExperience";
import projects from "../data/projects";
import ProjectList from "../components/ProjectList";
import publications from "../data/publications";
import PublicationList from "../components/PublicationList";
import TagList from "../components/TagList";
import interests from "../data/interests";
import coursesTaken from "../data/coursesTaken";
import honorsAndAwards from "../data/awards";
import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <HeadingAndContent title={"Research Interests"}>
        <TagList itemList={interests} />
      </HeadingAndContent>
      <HeadingAndContent title={"About Me"}>
        <div className="text-md md:text-lg">{about}</div>
      </HeadingAndContent>
      <HeadingAndContent title={"Publications"}>
        <PublicationList publications={publications} />
      </HeadingAndContent>
      <HeadingAndContent title={"Projects"}>
        <ProjectList projects={projects} />
      </HeadingAndContent>
      <HeadingAndContent title={"Education"}>
        <EducationCardContainer cardData={education} />
      </HeadingAndContent>
      <HeadingAndContent title={"Teaching Experience"}>
        {<WorkExperienceTimeline experience={teachingExperience} />}
      </HeadingAndContent>
      <HeadingAndContent title={"Work Experience"}>
        {<WorkExperienceTimeline experience={experience} />}
      </HeadingAndContent>
      <HeadingAndContent title={"Courses Taken During BS"}>
        <TagList itemList={coursesTaken} />
      </HeadingAndContent>
      <HeadingAndContent title={"Honors & Awards"}>
        <CardContainer cardData={honorsAndAwards} />
      </HeadingAndContent>
    </div>
  );
};

export default Home;
