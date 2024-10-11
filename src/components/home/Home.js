import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import Shimmer from "./Shimmer";
import "./Home.css";
import { challengesData } from "../../mocks/mockChallengesConfig";

const Home = () => {
  const [challenges, setchallenges] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  // when the page loads make an api call to get memes
  useEffect(() => {
    fetchChallenges();

    window.addEventListener("scroll", handleSCroll);

    return () => {
      window.removeEventListener("scroll", handleSCroll);
    };
  }, []);

  const handleSCroll = () => {
    console.log(
      "innerHeight : height of the window (visible section)",
      window.innerHeight
    );
    console.log("scrollY (how much I have scrolled)", window.scrollY);
    console.log(
      "scrollHeight : total height of the webpage",
      document.body.scrollHeight
    );
    console.log(
      "offsetHeight : total height including padding and excluding margins",
      document.body.offsetHeight
    );
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchChallenges();
    }
  };

  const fetchChallenges = async () => {
    try {
      setShowShimmer(true);
      setchallenges(challengesData);
      setShowShimmer(false);
    } catch (error) {
      console.log("Error while fetching memes", error);
    } finally {
      setShowShimmer(false);
    }
  };

  return (
    <div>
      <h1>React Machine Coding Challenges !!</h1>
      <div className="challenges-container">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default Home;
