import React from "react";
import Describe from "./Describe";
import ProductAmount from "./ProductAmount";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <Describe />
      <ProductAmount />
    </div>
  );
};

export default ProductDescription;
