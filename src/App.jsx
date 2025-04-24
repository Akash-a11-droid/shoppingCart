import React, { useState } from "react";
import ProductCard from "./productListComponents/ProductCard";
import Cart from "./cartComponents/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./contexts/CartContext"; // ✅ import context

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
