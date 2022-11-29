import Logo from "./Logo";
import "./styles.scss";
import React from "react";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="menu">
        <ul>
          <li>
            <Link to="/about">
              <AiOutlineInfoCircle size={40} />
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <AiOutlineHeart size={40} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
