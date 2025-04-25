import React, { useContext } from "react";
import cartStyles from "./Cart.module.css";
import Header from "../productListComponents/Header";
import CartContext from "../contexts/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <>
      <Header />
      <div className={cartStyles.cartWrapper}>
        <h1>Cart Page</h1>
        {cart.length === 0 ? (
          <h1>Cart is empty...</h1>
        ) : (
          <ul>
            {cart.map((productObj) => (
              <li key={productObj.id}>
                <img
                  src={productObj.image}
                  alt="Product img"
                  className={cartStyles.productImage}
                />
                <p>
                  {productObj.title}
                  <button className={cartStyles.arrowButton}>
                    <img src="../../down-arrow.png" alt="Down-arrow" />
                  </button>
                </p>
                <p>${productObj.price}</p>
                <span>
                  <button
                    className={cartStyles.minusIconButton}
                    onClick={() => {
                      decreaseCount(productObj.id);
                    }}
                  >
                    <img src="../../minus.png" alt="Minus-Icon" />
                  </button>
                  <button
                    className={cartStyles.addIconButton}
                    onClick={() => {
                      increaseCount(productObj.id);
                    }}
                  >
                    <img src="../../add.png" alt="Add-Icon" />
                  </button>
                </span>
                <p>Count : {productObj.count}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
