import "./About.css";
import { LANG } from "../../utils/langConfig";

const About = ({ lang }) => {
  const data = LANG[lang].about;
  const {
    title,
    desc,
    whatWeDo,
    mission,
    descriptionTitle,
    whatWeDoTitle,
    missionTitle,
  } = data;

  return (
    <div className="about-container">
      <h2>{title}</h2>

      <div className="section">
        <h3>{descriptionTitle}</h3>
        <p>{desc}</p>
      </div>

      <div className="section">
        <h3>{whatWeDoTitle}</h3>
        <p>{whatWeDo}</p>
      </div>

      <div className="section">
        <h3>{missionTitle}</h3>
        <p>{mission}</p>
      </div>
    </div>
  );
};

export default About;
