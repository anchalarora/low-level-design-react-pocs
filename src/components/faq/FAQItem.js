import { useState, useEffect } from "react";
import "./FAQ.css";

const FAQItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // when component loads for the first time , first ques is kept open
    if (index == 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className="faq-box">
      <div className="question" onClick={handleClick}>
        <button className={`button arrow-button ${isShow ? "rotate" : ""}`}>
          {" "}
          >
        </button>
        <div>{faq.question}</div>
      </div>
      {isShow && <div className="answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
