import "./InfiniteScroll.css";
const MemeCard = ({ meme }) => {
  const { title, author, url } = meme;
  return (
    <div className="meme-card">
      <h2 className="meme-title ">{title}</h2>
      <h3>Author : {author}</h3>
      <img src={url}></img>
    </div>
  );
};

export default MemeCard;
