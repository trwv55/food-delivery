import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";

import "./App.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className='App'>
      <Header handleCart={() => setCartOpen(true)} />
      <ShoppingCart cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
