import React, { useContext, useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import Header from "./Header";
import CartContext from "../contexts/CartContext";

const ProductCard = () => {
  const [productsArr, setProductsArr] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [notification, setNotification] = useState(""); // New state for notification

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsArr(data));
  }, []);

  const addToCart = (productObj) => {
    const exists = cart.find((item) => item.id === productObj.id);
    if (exists) {
      increaseCount(productObj.id);

      // Show the "Added item" notification
      setNotification("Increased item count:" + productObj.title);
      setTimeout(() => setNotification(""), 1500); // Hide after 2 seconds
    } else {
      const productWithCount = { ...productObj, count: 1 };
      setCart([...cart, productWithCount]);

      // Show the "Added item" notification
      setNotification("Added item:" + productObj.title);
      setTimeout(() => setNotification(""), 1500); // Hide after 2 seconds
    }
  };

  // Notification styles (can be customized)
  const notificationStyles = {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 1000,
  };

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  return (
    <>
      <Header />
      {/* Show notification when item is added */}
      {notification && (
        <div style={notificationStyles}>
          <p>{notification}</p>
        </div>
      )}
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
            <p>${productObj.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(productObj)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductCard;
