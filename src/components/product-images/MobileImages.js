import React from "react";
import { ReactComponent as Backward } from "../images/icon-previous.svg";
import { ReactComponent as Forward } from "../images/icon-next.svg";

const MobileImages = ({ product, index, handleIndex }) => {
  return (
    <div className="mobile-images">
      <Backward
        className="arrow"
        onClick={() => handleIndex((prev) => (prev > 0 ? prev - 1 : 3))}
      />
      <img src={product.images[index].big} alt="" />
      <Forward
        className="arrow"
        onClick={() => handleIndex((prev) => (prev < 3 ? prev + 1 : 0))}
      />
    </div>
  );
};

export default MobileImages;
