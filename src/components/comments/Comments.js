import CommentBox from "./CommentBox";
import "./Comments.css";

const data = [
  {
    userName: "Anchal Arora",
    comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
    replies: [
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
        replies: [
          {
            userName: "Anchal Arora",
            comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
          },
          {
            userName: "Anchal Arora",
            comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
            replies: [
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a",
              },
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a",
              },
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a ",
              },
            ],
          },
          {
            userName: "Anchal Arora",
            comment:
              "Lorem In publishing and graphic design, Lorem ipsum is a ",
          },
        ],
      },
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
      },
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a ",
      },
    ],
  },
  {
    userName: "Anchal Arora",
    comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
  },
  {
    userName: "Anchal Arora",
    comment: "Lorem In publishing and graphic design, Lorem ipsum is a ",
    replies: [
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
      },
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
      },
      {
        userName: "Anchal Arora",
        comment: "Lorem In publishing and graphic design, Lorem ipsum is a ",
        replies: [
          {
            userName: "Anchal Arora",
            comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
            replies: [
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a",
              },
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a",
                replies: [
                  {
                    userName: "Anchal Arora",
                    comment:
                      "Lorem In publishing and graphic design, Lorem ipsum is a",
                  },
                  {
                    userName: "Anchal Arora",
                    comment:
                      "Lorem In publishing and graphic design, Lorem ipsum is a",
                  },
                  {
                    userName: "Anchal Arora",
                    comment:
                      "Lorem In publishing and graphic design, Lorem ipsum is a ",
                  },
                ],
              },
              {
                userName: "Anchal Arora",
                comment:
                  "Lorem In publishing and graphic design, Lorem ipsum is a ",
              },
            ],
          },
          {
            userName: "Anchal Arora",
            comment: "Lorem In publishing and graphic design, Lorem ipsum is a",
          },
          {
            userName: "Anchal Arora",
            comment:
              "Lorem In publishing and graphic design, Lorem ipsum is a ",
          },
        ],
      },
    ],
  },
];

const Comments = () => {
  return (
    <div className="comments-container">
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
