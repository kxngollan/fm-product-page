import React from "react";
import ProductImages from "./product-images/ProductImages";
import "./ProductPage.css";
import ProductDescription from "./product-description/ProductDescription";

const ProductPage = ({ product, addToCart }) => {
  return (
    <div className="product-page">
      <ProductImages product={product} />
      <ProductDescription product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
