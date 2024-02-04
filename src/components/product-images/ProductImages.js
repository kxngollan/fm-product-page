import React from "react";
import MainImage from "./MainImage";
import BottomImages from "./BottomImages";
import "./ProductImages.css";

const ProductImages = () => {
  return (
    <div className="product-images">
      <MainImage />
      <BottomImages />
    </div>
  );
};

export default ProductImages;
