const Modal = ({ handleClose, handleAcceptBtnClick }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      handleClose();
    }
  };
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close-modal-btn" onClick={handleClose}>
          X
        </button>
        <div className="content">
          click the button below to aceept amazing offer!!
        </div>
        <button className="accept-offer-btn" onClick={handleAcceptBtnClick}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Modal;
