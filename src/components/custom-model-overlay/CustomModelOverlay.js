import { useState } from "react";

import "./CustomModelOverlay.css";
import Modal from "./Modal";

const CustomModelOverlay = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleClose = () => {
    setIsShowModal(false);
  };

  const handleBtnClick = () => {
    setIsShowModal(true);
  };

  const handleAcceptBtnClick = () => {
    setIsOfferAccepted(true);
    setIsShowModal(false);
  };

  return (
    <div>
      <div className="show-offer">
        {!isOfferAccepted ? (
          <button className="show-offer-btn" onClick={handleBtnClick}>
            Show Offer
          </button>
        ) : (
          <div style={{ fontSize: 50 }}>Offer Accepted </div>
        )}
      </div>

      {isShowModal && (
        <Modal
          handleClose={handleClose}
          handleAcceptBtnClick={handleAcceptBtnClick}
        />
      )}
    </div>
  );
};

export default CustomModelOverlay;
