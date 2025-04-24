import React, { useContext, useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import Header from "./Header";
import CartContext from "../contexts/CartContext"; // ✅ import context

const ProductCard = () => {
  const [productsArr, setProductsArr] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsArr(data));
  }, []);

  const addToCart = (productObj) => {
    setCart([...cart, productObj]);
  };

  return (
    <>
      <Header />
      <ul className={styles.ul}>
        {productsArr.map((productObj) => (
          <li key={productObj.id}>
            <img src={productObj.image} alt="Product img" className={styles.productImage} />
            <p>
              {productObj.title}
              <button className={styles.arrowButton}>
                <img src="../../down-arrow.png" alt="Down-arrow" />
              </button>
            </p>
            <p>${productObj.price}</p>
            <button className={styles.addToCartButton} onClick={() => addToCart(productObj)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductCard;
