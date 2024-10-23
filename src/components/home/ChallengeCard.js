import "./Home.css";
import { useNavigate } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  const { title, duration, difficultyLevel, url } = challenge;
  const navigate = useNavigate();

  const navigationMap = {
    "Infinite Scroll": "/infinite-scroll",
    Pagination: "/pagination",
    "Live-chat": "/live-chat",
    Accordion: "/accordion",
    Comments: "/comments",
    "Theme Toggle": "/theme",
    "Config Driven UI": "/config-driven-ui",
    "Count Down Timer": "/count-down-timer",
    FAQs: "/faq",
    "Image Slider": "/image-slider",
    "Mortgage Calculator": "/mortgage-calc",
    "Custom Modal Overlay": "/custom-overlay",
    "Multi Step Form": "/multi-step-form",
    "Auto Suggestion": "/auto-suggestion",
    "Bar Chart": "/bar-chart",
    "Pagination With Search": "/pagination-and-search",
  };

  const handleCardClick = () => {
    const route = navigationMap[title]; // Get the corresponding route from the map
    console.log("route", route);
    if (route) {
      navigate(route);
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
