import "./Home.css";
import { useNavigate } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  const { title, duration, difficultyLevel, url } = challenge;
  const navigate = useNavigate();

  const handleCardClick = () => {
    switch (title) {
      case "Infinte Scroll":
        navigate("/");
        break;
      case "Pagination":
        navigate("/pagination");
        break;
      case "Live-chat":
        navigate("/live-chat");
        break;
      case "Accordion":
        navigate("/accordion");
        break;
      case "Comments":
        navigate("/comments");
        break;
      case "Theme Toggle":
        navigate("/theme");
        break;
      case "Config Driven UI":
        navigate("/config-driven-ui");
        break;
      case "Count Down Timer":
        navigate("/count-down-timer");
        break;
      case "FAQs":
        navigate("/faq");
        break;
      case "Image Slider":
        navigate("/image-slider");
        break;
      case "Infinite Scroll":
        navigate("/infinite-scroll");
        break;
      case "Mortgage Calculator":
        navigate("/mortgage-calc");
        break;
      case "Custom Modal Overlay":
        navigate("/custom-overlay");
        break;
      case "Multi Step Form":
        navigate("/multi-step-form");
        break;
    }
  };

  return (
    <div className="challenge-card" onClick={handleCardClick}>
      <h2 className="challenge-title ">{title}</h2>
      <h3>Duration : {duration}</h3>
      <h3>Difficulty Level : {difficultyLevel}</h3>
      {/* <img className="h-100 object-cover" src={url}></img> */}
    </div>
  );
};

export default ChallengeCard;
