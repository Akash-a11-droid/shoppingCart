import React, { useState, useEffect, useRef } from 'react'
import ProductCard from './productListComponents/ProductCard';
import Header from './productListComponents/Header';


const App = () => {
    const [productsArr, setProductsArr] = useState([]);    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProductsArr(data));
    }, []);

    return (
        <div>
            <Header />
            <div style={{ marginTop: '65px' }}>
              <ProductCard productsArr={productsArr}/>
            </div>
        </div>

    )
}

export default App;
