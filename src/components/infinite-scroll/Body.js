import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
import "./InfiniteScroll.css";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  // when the page loads make an api call to get memes
  useEffect(() => {
    fetchMemes();

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
      fetchMemes();
    }
  };
  const fetchMemes = async () => {
    try {
      setShowShimmer(true);
      const data = await fetch("https://meme-api.com/gimme/20");

      const response = await data.json();
      setShowShimmer(false);
      setMemes((memes) => [...memes, ...response.memes]);
    } catch (error) {
      console.log("Error while fetching memes", error);
    } finally {
      setShowShimmer(false);
    }
  };

  return (
    <div>
      <h1>Welcome to the world of Memes !!</h1>
      <div className="body-container">
        {memes.map((meme, index) => (
          <MemeCard key={index} meme={meme} />
        ))}
        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default Body;
