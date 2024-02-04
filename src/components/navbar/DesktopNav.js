import React from "react";
import cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";

const DesktopNav = ({ navLinks }) => {
  return (
    <div className="desktop-nav">
      <ul className="desktop-links">
        {navLinks.map((l, index) => {
          return <li key={index}>{l.name}</li>;
        })}
      </ul>
      <div className="cart-profile">
        <img src={cart} alt="cart" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default DesktopNav;
