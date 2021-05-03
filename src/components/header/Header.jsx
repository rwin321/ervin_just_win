import React from "react";
import { NavLink } from "react-router-dom";
import jordan from "../../assets/imgs/jordan.svg";

const Header = () => {
  return (
    <div className="app__header header">
      <div className="header__wrapper">
        <div className="header__link">
          <NavLink to="/" className="header__link-left">
            <span>main</span>
          </NavLink>
        </div>
        <div className="header__link">
          <NavLink to="/">
            <img src={jordan} alt="23" />
          </NavLink>
        </div>
        <div className="header__link ">
          <NavLink to="about" className="header__link-right">
            <span>about</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
