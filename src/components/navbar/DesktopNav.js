import React, { useState } from "react";
import Cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";

const DesktopNav = ({ navLinks, cart }) => {
  const [showCart, setShowCart] = useState(false);

  const total = cart.length;

  return (
    <div className="desktop-nav">
      <ul className="desktop-links">
        {navLinks.map((l, index) => {
          return <li key={index}>{l.name}</li>;
        })}
      </ul>
      <div className="cart-profile">
        <div className="total">
          <img src={Cart} alt="cart" onClick={() => setShowCart(!showCart)} />
          {total > 0 ? <span className="num">{total}</span> : ""}
          {total > 9 ? <span className="num">9+</span> : ""}

          {showCart ? (
            <div className="cart-items">
              <h3>Cart</h3>
              <hr />
              <p>Your cart is empty</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default DesktopNav;
