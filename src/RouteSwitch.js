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
  const [searchOpen, setSearchOpen] = useState(false);

  ///If the search icon is clicked set state to open and display search bar
  ///If anywhere on the page is clicked, hide open search bar
  const handleSearchOpening = () => {
    setSearchOpen((prev) => !prev);
    console.log(searchOpen);
  };
  const closeSearch = () => {
    if (searchOpen) {
      handleSearchOpening();
    }
  };

  // //Fetch from fakestoreapi
  // const APICall = () => {
  //   let tempItems = [];

  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       tempItems = json;
  //     });
  //   console.log(tempItems);
  // };
  // console.log(APICall());

  useEffect(() => {
    setProducts(fakeAPIcall());
  }, []);

  useEffect(() => {}, [products]);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBasketUpdate = (product) => {
    let search = trolley.find((x) => x.id === product.id);

    if (search === undefined) {
      console.log("New Item");
      setTrolley([...trolley, { ...product, quantity: 1 }]);
    } else {
      console.log("else");
      let tempTrolley = [...trolley];
      let tempSearch = tempTrolley.find((x) => x.id === product.id);
      tempSearch.quantity++;
      setTrolley([...tempTrolley]);
    }
  };

  return (
    <BrowserRouter>
      <Header
        searchOpen={searchOpen}
        trolley={trolley}
        handleSearchOpening={handleSearchOpening}
        handleFilterOpening={handleFilterOpening}
      />
      <Basket trolley={trolley} setTrolley={setTrolley} isOpen={isOpen} />
      <div onClick={closeSearch}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={
              <Shop
                products={products}
                handleBasketUpdate={handleBasketUpdate}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
