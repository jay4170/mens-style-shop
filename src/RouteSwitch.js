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
  const [isOpen, setIsOpen] = useState(false);
  const [trolley, setTrolley] = useState([]);
  // const APICall = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // };
  useEffect(() => {
    setProducts(fakeAPIcall());
    // setTrolley(fakeAPIcall());
    //  setProducts(APICall());
  }, []);

  useEffect(() => {
    // console.log("Updated Products with ");
    // console.log(products);
  }, [products]);

  const handleFilterOpening = () => {
    console.log("handling open");
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };
  const handleBasketUpdate = (product) => {
    let tempTrolley = trolley;
    tempTrolley.push(product);
    setTrolley(tempTrolley);
  };

  return (
    <BrowserRouter>
      <Header
        trolley={trolley.length}
        handleFilterOpening={handleFilterOpening}
      />
      <Basket trolley={trolley} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <Shop products={products} handleBasketUpdate={handleBasketUpdate} />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
