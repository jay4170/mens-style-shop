import React from "react";
import ShopContent from "./ShopContent";

const Shop = (props) => {
  const allProducts = props.allProducts;

  return (
    <div className=" grid col-1 justify-center max-w-5xl  ">
      <h1 className="font-display text-xl xl:text-3xl text-cyan-900 m-2 text-center">
        OUR FULL COLLECTION
      </h1>
      <div className="h-24"></div>
      <ShopContent
        allProducts={allProducts}
        handleBasketUpdate={props.handleBasketUpdate}
      />
    </div>
  );
};
export default Shop;

//add a buy button to each item
//when the item is clicked add its object to the basket object
