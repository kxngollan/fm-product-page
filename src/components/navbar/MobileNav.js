import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { useState } from "react";

const MobileNav = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.classList.add("no-scroll");
  }

  return (
    <>
      <div className="mobile-nav">
        <Menu onClick={() => setOpen(true)} />
      </div>
      {open ? (
        <>
          <div className="backdrop"></div>
          <div className="side-menu">
            <Close onClick={() => setOpen(!open)} />
            <ul className="side-links">
              {navLinks.map((l, index) => {
                return (
                  <li className="mobile-link" key={index}>
                    {l.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileNav;
