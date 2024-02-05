import React from "react";
import Describe from "./Describe";
import ProductAmount from "./ProductAmount";
import "./ProductDescription.css";

const ProductDescription = ({ addToCart }) => {
  return (
    <div className="product-description">
      <Describe />
      <ProductAmount addToCart={addToCart} />
    </div>
  );
};

export default ProductDescription;
