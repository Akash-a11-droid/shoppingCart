import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Header from "../productListComponents/Header";
import CartContext from "../contexts/CartContext"; // ✅ import context

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <ul className={styles.ul}>
        {cart.length === 0 ? (
          <h1>Cart is empty</h1>
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
              <p>${productObj.price}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Cart;
