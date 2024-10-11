import "./Home.css";

const Shimmer = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((_, index) => (
          <div key={index} className="meme-card shimmer">
            <div className="shimmer-title"></div>
            <div className="shimmer-author"></div>
            <div className="shimmer-img"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
