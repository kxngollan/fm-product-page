import React from "react";

const Describe = () => {
  return (
    <div className="describe">
      <h3 className="h3company">SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="pricing">
        <div className="price-saving">
          <h2 className="price">$125.00</h2>
          <p className="discount">50%</p>
        </div>
        <p className="old-price">$250.00</p>
      </div>
    </div>
  );
};

export default Describe;
