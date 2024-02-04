import React from "react";
import ProductImages from "./product-images/ProductImages";
import "./ProductPage.css";
import ProductDescription from "./product-description/ProductDescription";

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductImages />
      <ProductDescription />
    </div>
  );
};

export default ProductPage;
