import React, { useState } from "react";
import "./navbar.styles.css";
import logo from "../../media/logo.jpg";
import { pageLinks, socialLinks } from "../../data";
import PageLinks from "../PageLinks/page-links.component";
import SocialLink from "../SocialLink/social-link.component";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleButton = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="tour-up" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleButton}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks
          parentClass={`nav-links ${showLinks ? "show-links" : ""}`}
          itemClass="nav-link"
        />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
