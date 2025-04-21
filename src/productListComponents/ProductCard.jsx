import React, { createContext, useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import Header from "./Header";

const ProductCard = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductsArr(data));
  }, []);

  const [cart, setCart] = useState([]);
  const cartContext = createContext(cart);

  function addToCart(productObj) {
    setCart([...cart, productObj]);
  }

  return (
    <cartContext.Provider value={cart}>
      <Header />
      <ul className={styles.ul}>
        {productsArr.map((productObj) => (
          <li key={productObj.id}>
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
            <button
              className={styles.addToCartButton}
              onClick={() => {
                addToCart(productObj);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </cartContext.Provider>
  );
};

export default ProductCard;