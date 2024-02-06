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
        <div className="total" onClick={() => setShowCart(!showCart)}>
          <img src={Cart} alt="cart" />
          {total > 0 ? <span className="num">{total}</span> : ""}
          {total > 9 ? <span className="num">9+</span> : ""}

          {showCart ? (
            <div className="cart-items">
              <h3>Cart</h3>
              <hr />
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map((item, index) => {
                  return (
                    <div key={index} className="cart-item">
                      <img
                        src={item.images[0].small}
                        className="cart-img"
                        alt={item.name}
                      />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>$ {item.price}</p>
                      </div>
                    </div>
                  );
                })
              )}
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
