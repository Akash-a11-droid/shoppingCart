import React from 'react';
import styles from './ProductCard.module.css';



const ProductCard = ({productsArr}) => {
  // const ToggleDesc = (e, productObjDesc) => {
  //   console.log(productObjDesc);
  //   const desc = Document.getElementById('styles.productDescHidden' || 'styles.productDescVisible');
  //   desc.className === 'styles.productDescHidden' ? 'styles.productDescVisible' : 'styles.productDescHidden';
  // }

  return (  
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
            {/* <p className={styles.productDescHidden}>{productObj.description}</p> */}
            <p> ${productObj.price}</p>
            <button className={styles.addToCartButton}>Add to cart</button>
          </li> )
      )}
    </ul>
  );
  
}

export default ProductCard;