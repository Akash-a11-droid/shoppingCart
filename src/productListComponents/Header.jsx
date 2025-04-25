import React from "react";
import headerStyles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1>Fake Shop</h1>
      <div>
        <Link to="/">
          <button className={headerStyles.iconButton}>
            <img src="../../home.png" alt="Home-Icon" />
          </button>
        </Link>
        <Link to="/cart">
          <button className={headerStyles.iconButton}>
            <img src="../../cart.png" alt="Cart-Icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
