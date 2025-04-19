import React from 'react';
import headerStyles from './Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.container}>
        <h1>Fake Shop</h1>
        <button className={headerStyles.cartIconButton}>
            <img src="../../cart.png" alt="Cart-Icon" />
        </button>
    </div>
  )
}

export default Header;