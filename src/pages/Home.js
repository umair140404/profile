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
      <HeadingAndContent title={"About Me"} id={"about"}>
        <div className="text-md md:text-lg">{about}</div>
      </HeadingAndContent>
      <HeadingAndContent title={"Research Interests"} id={"interests"}>
        <CardContainer cardData={interests} />
      </HeadingAndContent>
      <HeadingAndContent title={"Publications"} id={"publications"}>
        <PublicationList publications={publications} />
      </HeadingAndContent>
      <HeadingAndContent title={"Projects"} id={"projects"}>
        <ProjectList projects={projects} />
      </HeadingAndContent>
      <HeadingAndContent title={"Education"} id={"education"}>
        <EducationCardContainer cardData={education} />
      </HeadingAndContent>
      <HeadingAndContent title={"Teaching Experience"} id={"experience"}>
        {<WorkExperienceTimeline experience={teachingExperience} />}
      </HeadingAndContent>
      <HeadingAndContent title={"Work Experience"}>
        {<WorkExperienceTimeline experience={experience} />}
      </HeadingAndContent>
      <HeadingAndContent
        title={"Relevant Courses Taken During BS"}
        id={"courses"}
      >
        <TagList itemList={coursesTaken} />
      </HeadingAndContent>
      <HeadingAndContent title={"Honors & Awards"} id={"honors"}>
        <CardContainer cardData={honorsAndAwards} />
      </HeadingAndContent>
    </div>
  );
};

export default Home;
