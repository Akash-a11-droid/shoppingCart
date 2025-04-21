import React, { useContext } from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useContext(cartContext);
  return (
    <ul className={styles.ul}>
      {cart.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        cart.map((productObj, index) => (
          <li key={index}>
            <img
              src={productObj.image}
              alt="Product img"
              className={styles.productImage}
            />
            <p>
              {productObj.title}
              <button className={styles.arrowButton}>
                <img src="../../down-arrow.png" alt="Down-arrow" />
              </button>
            </p>
            <p> ${productObj.price} </p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cart;