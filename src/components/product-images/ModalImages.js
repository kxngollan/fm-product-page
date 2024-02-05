import React, { useState } from "react";
import "./ModalImages.css";
import { ReactComponent as Close } from "../images/icon-close.svg";

const ModalImages = ({ product, closeModal }) => {
  const [index, setIndex] = useState(0);

  const handleIndex = (n) => {
    setIndex(n);
  };

  return (
    <div className="modal">
      <div className="overflow" onClick={closeModal}></div>
      <div className="modal-content">
        <button className="close-modal" type="button" onClick={closeModal}>
          <Close style={{ fill: "#000 !important" }} />
        </button>
        <img
          className="modal-main-image"
          src={product.images[index].big}
          alt="product"
        />
        <div className="modal-bottom-images">
          {product.images.map((image, i) => {
            return (
              <img
                src={image.small}
                alt=""
                className={`mini-image ${index === i ? "displaying" : ""}`}
                key={i}
                onClick={() => handleIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalImages;
