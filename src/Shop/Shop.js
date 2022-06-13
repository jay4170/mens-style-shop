import React from "react";
import ShopContent from "./ShopContent";

const Shop = (props) => {
  const products = props.products;

  return (
    <div className="bg-cyan-50 grid col-1 justify-center ">
      <h1 className="font-display text-xl text-cyan-900 m-2 text-center">
        OUR FULL COLLECTION
      </h1>
      <div className="h-24"></div>
      <ShopContent
        products={products}
        handleBasketUpdate={props.handleBasketUpdate}
      />
    </div>
  );
};
export default Shop;

//add a buy button to each item
//when the item is clicked add its object to the basket object
