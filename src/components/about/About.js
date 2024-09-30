import "./About.css";
import { LANG } from "../../utils/langConfig";

const About = ({ lang }) => {
  const data = LANG[lang].about;
  const { title, desc, whatWeDo, mission } = data;

  return (
    <div className="about-container">
      <h2>{title}</h2>

      <div className="section">
        <h3>Description</h3>
        <p>{desc}</p>
      </div>

      <div className="section">
        <h3>What We Do</h3>
        <p>{whatWeDo}</p>
      </div>

      <div className="section">
        <h3>Our Mission</h3>
        <p>{mission}</p>
      </div>
    </div>
  );
};

export default About;
