import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Cart } from "./components/cart";
import { Helmet } from "react-helmet";
import { ShopContext } from "./components/shop-context";
import logoSM from "./components/assets/logoSM.png";
import { ShopContextProvider } from "./components/shop-context";

function App() {
  return (
    <div className="max-w mx-auto">
      <Helmet>
        <title>WhaleTech3D</title>
        <link rel="icon" href={logoSM} type="image/png" />
      </Helmet>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
