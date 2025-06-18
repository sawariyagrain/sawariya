import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import data from "./data";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { createHashRouter } from "react-router-dom";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const buttonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={showMenu ? "menu-mobile" : "menu-web"}>
          <ul className="nav__menu">
            {data.map((item) => (
              <li key={item.id}>
                <Link to={item.link} onClick={() => setShowMenu(false)}>
                  {item.title}
                </Link>
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
