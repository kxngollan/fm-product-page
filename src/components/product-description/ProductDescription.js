import React from "react";
import Describe from "./Describe";
import ProductAmount from "./ProductAmount";
import "./ProductDescription.css";

const ProductDescription = ({ product, addToCart }) => {
  return (
    <div className="product-description">
      <Describe product={product} />
      <ProductAmount product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductDescription;
