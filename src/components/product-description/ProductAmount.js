import React, { useState } from "react";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";

const ProductAmount = ({ addToCart }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="product-amount">
      <div className="quantity-control">
        <button
          type="button"
          onClick={() => setAmount((prev) => (prev === 0 ? 0 : prev - 1))}
        >
          <Minus />
        </button>
        <input type="number" value={amount} readOnly />
        <button type="button" onClick={() => setAmount((prev) => prev + 1)}>
          <Plus />
        </button>
      </div>

      <button className="add-to-cart" type="button">
        <Cart className="cart" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductAmount;
