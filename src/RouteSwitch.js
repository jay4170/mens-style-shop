import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Shop from "./Shop/Shop";
import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import { useEffect, useState } from "react";
import fakeAPIcall from "./fakeApiCall";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);
  // const APICall = () => {
  //   fetch("https://fakestoreapi.com/products?limit=5")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProducts(json);
  //     });
  // };
  useEffect(() => {
    setProducts(fakeAPIcall());
  }, []);
  useEffect(() => {
    console.log("Updated Products with ");
    console.log(products);
  }, [products]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop products={products} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
