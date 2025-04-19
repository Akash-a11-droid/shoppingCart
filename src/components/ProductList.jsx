import React, { useState, useEffect, useRef } from 'react'
import ProductCard from './ProductCard';


const ProductList = () => {
    const [productsArr, setProductsArr] = useState([]);    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProductsArr(data));
    }, []);

    return (
        <ProductCard productsArr={productsArr}/>
    )
}

export default ProductList;