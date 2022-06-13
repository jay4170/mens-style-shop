import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Shop from "./Shop/Shop";
import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import { useEffect, useState } from "react";
import fakeAPIcall from "./fakeApiCall";
import Basket from "./Basket/Basket";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);

  const [trolley, setTrolley] = useState([]);

  // const APICall = () => {
  //   fetch("https://fakestoreapi.com/products?limit=5")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProducts(json);
  //     });
  // };
  useEffect(() => {
    setProducts(fakeAPIcall());
    setTrolley(fakeAPIcall());
    //   setProducts(APICall());
  }, []);

  useEffect(() => {
    console.log("Updated Products with ");
    console.log(products);
  }, [products]);

  //on clicking the add to basket, store the object in a new array
  //basket icon show number basket.len

  return (
    <BrowserRouter>
      <Header trolley={trolley.length} />
      <Basket trolley={trolley}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop products={products} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
