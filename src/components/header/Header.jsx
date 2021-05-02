import React from "react";
import { NavLink } from "react-router-dom";
import jordan from "../../assets/imgs/jordan.svg";

const Header = () => {
  return (
    <div className="app__header header">
      <div className="header__wrapper">
        <div className="header__link">
          <NavLink to="/">
            <span>main</span>
          </NavLink>
        </div>
        <div className="header__link">
          <NavLink to="/">
            <img src={jordan} alt="23" />
          </NavLink>
        </div>
        <div className="header__link">
          <NavLink to="projects">
            <span>projects</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
