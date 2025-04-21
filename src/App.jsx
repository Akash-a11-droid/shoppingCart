import React from "react";
import ProductCard from "./productListComponents/ProductCard";
import Cart from "./cartComponents/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <ProductCard /> } />   
          <Route path="/cart" element={ <Cart /> } />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;