import React from 'react';
import headerStyles from './Header.module.css';

const Header = () => {

  function handleClick(){
    window.open("../cartComponents/Cart.jsx");
  }

  return (
    <div className={headerStyles.container}>
        <h1>Fake Shop</h1>
        <button className={headerStyles.cartIconButton} onClick={handleClick}>
          <img src="../../cart.png" alt="Cart-Icon" />
        </button>
    </div>
  )
}

export default Header;