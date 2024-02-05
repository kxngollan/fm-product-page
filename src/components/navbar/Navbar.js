import React from "react";
import logo from "../images/logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const navLinks = [
    {
      name: "Collection",
      link: "/",
    },
    {
      name: "Men",
      link: "/men",
    },
    {
      name: "Women",
      link: "/women",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav>
        <MobileNav navLinks={navLinks} />
        <img className="logo" src={logo} alt="logo" />
        <DesktopNav navLinks={navLinks} cart={cart} />
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
