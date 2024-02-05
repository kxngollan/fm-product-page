import React from "react";

const MainImage = ({ product, index, openModal }) => {
  return (
    <img
      className="main-image"
      src={product.images[index].big}
      alt="product"
      onClick={openModal}
    />
  );
};

export default MainImage;
