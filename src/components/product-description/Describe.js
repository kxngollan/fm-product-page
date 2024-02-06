import React from "react";

const Describe = ({ product }) => {
  return (
    <div className="describe">
      <h3 className="h3company">SNEAKER COMPANY</h3>
      <h1>{product.name}</h1>
      <p className="description">{product.description}</p>
      <div className="pricing">
        <div className="price-saving">
          <h2 className="price">${product.price}</h2>
          {product.discountPercentage ? (
            <p className="discount">{product.discountPercentage}%</p>
          ) : (
            ""
          )}
        </div>
        <p className="old-price">${product.oldPrice}</p>
      </div>
    </div>
  );
};

export default Describe;
