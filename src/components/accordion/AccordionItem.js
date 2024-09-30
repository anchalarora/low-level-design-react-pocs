import downArrow from "../../assets/down-arrow.png";

const AccordionItem = ({ title, content, isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState();
  return (
    <div className="accordion-container">
      <div className="title-container" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title">{title}</div>
        <img src={downArrow} alt="arrow"></img>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export default AccordionItem;
