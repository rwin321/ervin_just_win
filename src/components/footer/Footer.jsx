import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="app__footer footer">
      <div className="footer__wrapper">
        <NavLink to="/projects">
          <div className="footer__link">projects</div>
        </NavLink>
        <NavLink to="aim">
          <div className="footer__link">aim</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
