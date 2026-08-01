import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Markdown from "../components/Markdown";
import CardContainer from "../components/CardContainer";
import profile from "../data/profile.yaml";
import interests from "../data/interests.yaml";

const Home = () => {
  return (
    <div className="space-y-14">
      <Hero />

      <Section title="About Me">
        <Markdown className="text-md md:text-lg text-base-content/85">
          {profile.bio}
        </Markdown>
      </Section>

      <Section title="Research Interests">
        <CardContainer cardData={interests} />
      </Section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/research" className="btn btn-primary">
          View current research
        </Link>
        <Link to="/experience" className="btn btn-outline">
          Experience & education
        </Link>
      </div>
    </div>
  );
};

export default Home;
