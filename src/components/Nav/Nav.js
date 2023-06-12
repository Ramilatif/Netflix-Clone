import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const scrollEventhandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    };

  useEffect(() => {
    window.addEventListener("scroll", scrollEventhandler);

    return () => {
      window.removeEventListener("scroll", scrollEventhandler);
    };
  }, []);
console.log("show", show)
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
