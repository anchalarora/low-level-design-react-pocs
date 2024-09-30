import "./Comments.css";
const CommentBox = ({ data }) => {
  return data.map((item, index) => {
    return (
      <div className="comment-box-container" key={index}>
        <div className="comment-box">
          <img src="https://img.freepik.com/premium-photo/minimalist-teddy-bear-icon-black-white-line-illustration_899449-43993.jpg?w=1060" />
          <div>
            <p>{item.userName}</p>
            <p>{item.comment}</p>
          </div>
        </div>
        <div>
          {item.replies && (
            <div className="comment-replies-container ">
              <CommentBox data={item.replies} />
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default CommentBox;
