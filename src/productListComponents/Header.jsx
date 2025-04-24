import React from "react";
import headerStyles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1>Fake Shop</h1>
      <Link to="/cart">
        <button className={headerStyles.cartIconButton}>
          <img src="../../cart.png" alt="Cart-Icon" />
        </button>
      </Link>
    </div>
  );
};

export default Header;
