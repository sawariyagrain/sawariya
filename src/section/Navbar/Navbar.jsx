import Logo from "../../assets/Logo.png";
import data from "./data";
import "./navbar.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Add Close Icon

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const buttonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className={showMenu ? "menu-mobile" : "menu-web"}>
          <ul className="nav__menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hem-menu">
          <button onClick={buttonToggle} className="btn btn-primary">
            {showMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
