import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="app__footer footer">
      <div className="footer__wrapper">
        <div className="footer__link">
          <NavLink to="projects" className="roll-under">
            <span>projects</span>
          </NavLink>
        </div>
        <div className="footer__link">
          <NavLink to="contact" className="roll-under">
            <span>contact</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
