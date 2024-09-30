import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const data = [
  {
    title: "Accordion Item #1",
    content:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    content:
      "This is the second item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    content:
      "This is the third item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Accordion = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(0);
  return (
    <div className="accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === isOpenIndex}
            setIsOpen={() => {
              index === isOpenIndex
                ? setIsOpenIndex(null)
                : setIsOpenIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default Accordion;
