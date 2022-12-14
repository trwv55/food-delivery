import React, { useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import MainScreen from "./components/MainScreen";
import FreshProducts from "./components/FreshProducts";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className='App'>
      <Header handleCart={() => setCartOpen(true)} />

      <MainScreen />
      <FreshProducts />
      <Menu />
      <Footer />
      <ShoppingCart cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
