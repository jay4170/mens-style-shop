import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Shop from "./Shop/Shop";
import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import { useEffect, useState } from "react";
import fakeAPIcall from "./fakeApiCall";
import Basket from "./Basket/Basket";

const RouteSwitch = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [trolley, setTrolley] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTyping, setSearchTyping] = useState("");
  const [allFilteredProducts, setAllFilteredProducts] = useState([]);
  const [basketValue, setBasketValue] = useState({ quantity: 0, value: 0 });

  ///If the search icon is clicked set state to open and display search bar
  ///If anywhere on the page is clicked, hide open search bar
  const handleSearchOpening = () => {
    setSearchOpen((prev) => !prev);
  };

  const closeOpenTabs = () => {
    if (searchOpen) {
      handleSearchOpening();
    }
    if (isOpen) {
      handleFilterOpening();
    }
  };
  const handleSearchSubmit = () => {
    console.log(searchTyping);
  };
  // ///Filter products array based on the current value of searchTyping
  useEffect(() => {
    let tempArray = [...allProducts];
    let otherTempArray = [];
    tempArray.forEach((product) => {
      if (
        product.title.toUpperCase().indexOf(searchTyping.toUpperCase()) > -1
      ) {
        otherTempArray.push(product);
      }
    });
    setAllFilteredProducts(otherTempArray);
  }, [searchTyping]);

  ///update basket with the total items placed in it
  useEffect(() => {
    let basketTotalQuantity = 0;
    let basketTotalValue = 0;
    trolley.forEach((product) => {
      basketTotalQuantity = basketTotalQuantity + product.quantity;
      basketTotalValue = basketTotalValue + product.price * product.quantity;
    });

    setBasketValue({ quantity: basketTotalQuantity, value: basketTotalValue });
  }, [trolley]);

  useEffect(() => {
    setAllFilteredProducts(fakeAPIcall());
    setAllProducts(fakeAPIcall());
  }, []);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBasketUpdate = (product) => {
    let search = trolley.find((x) => x.id === product.id);

    if (search === undefined) {
      setTrolley([...trolley, { ...product, quantity: 1 }]);
    } else {
      let tempTrolley = [...trolley];
      let tempSearch = tempTrolley.find((x) => x.id === product.id);
      tempSearch.quantity++;
      setTrolley([...tempTrolley]);
    }
  };
  const handleBasketRemoval = (product) => {
    let tempTrolley = [...trolley];
    let search = tempTrolley.findIndex((x) => x.id === product.id);
    tempTrolley.splice(search, 1);
    setTrolley([...tempTrolley]);
  };

  const handleBasketIncrement = (product) => {
    let tempTrolley = [...trolley];
    let search = tempTrolley.findIndex((x) => x.id === product.id);
    console.log(product);
    tempTrolley[search].quantity++;
    setTrolley([...tempTrolley]);
  };
  const handleBasketDecrement = (product) => {
    if (product.quantity - 1 === 0) {
      handleBasketRemoval(product);
    } else {
      let tempTrolley = [...trolley];
      let search = tempTrolley.findIndex((x) => x.id === product.id);

      tempTrolley[search].quantity--;
      setTrolley([...tempTrolley]);
    }
  };

  return (
    <BrowserRouter>
      <Header
        handleSearch={handleSearchSubmit}
        searchTyping={searchTyping}
        setSearchTyping={setSearchTyping}
        searchOpen={searchOpen}
        trolleyQuantity={basketValue.quantity}
        handleSearchOpening={handleSearchOpening}
        handleFilterOpening={handleFilterOpening}
      />
      <Basket
        trolley={trolley}
        handleBasketRemoval={handleBasketRemoval}
        trolleyValue={basketValue.value}
        setTrolley={setTrolley}
        isOpen={isOpen}
        handleBasketIncrement={handleBasketIncrement}
        handleBasketDecrement={handleBasketDecrement}
      />
      <div onClick={closeOpenTabs}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={
              <Shop
                allProducts={allFilteredProducts}
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
