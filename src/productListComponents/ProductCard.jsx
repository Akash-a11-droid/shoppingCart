import React, { createContext, useState } from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({productsArr}) => {

  const [cart, setCart] = useState([]);
  const cartContext = createContext(cart);

  function addToCart(productObj) {
    setCart([...cart, productObj]);
  }

  return ( 
      <cartContext.Provider value={cart}>    
        <ul className={styles.ul}>
          {productsArr.map((productObj)=>(
              <li key={productObj.id}> 
                <img src={productObj.image} alt="Product img" className={styles.productImage}/>
                <p> 
                  {productObj.title}
                  <button className={styles.arrowButton}>
                    <img src="../../down-arrow.png" alt="Down-arrow"/>
                  </button>
                </p>
                <p> ${productObj.price}</p>
                <button className={styles.addToCartButton} onClick={ ()=>{ addToCart(productObj) } }>Add to cart</button>
              </li> )
          )}
        </ul>
      </cartContext.Provider>
  );
  
}

export default ProductCard;