import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [checkLogin, setCheckLogin] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [appEmail, setAppEmail] = useState();
  return (
    <div>
      <BrowserRouter>
        <Navigation
          checkLogin={checkLogin}
          setCheckLogin={setCheckLogin}
          appEmail={appEmail}
        />
        <Routes>
          <Route
            path="/"
            element={<Products setSelectedProduct={setSelectedProduct} />}
          />
          <Route
            path="/details"
            element={
              <Details
                selectedProduct={selectedProduct}
                setCartData={setCartData}
                cartData={cartData}
                checkLogin={checkLogin}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login setCheckLogin={setCheckLogin} setAppEmail={setAppEmail} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={<Cart checkLogin={checkLogin} cartData={cartData} />}
          />
          <Route
            path="/checkout"
            element={<Checkout appEmail={appEmail} cartData={cartData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
