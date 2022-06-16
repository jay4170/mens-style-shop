import React from "react";

export default function ShopContent(props) {
  const allProducts = props.allProducts;
  const handleBasketUpdate = props.handleBasketUpdate;
  return (
    <ul className="grid grid-cols-1 : sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
      {allProducts.length === 0 && <h2>No records match your search</h2>}
      {allProducts.map((product) => {
        return (
          <div key={product.id} className="text-center ">
            <li className="justify-center ">
              <img
                alt={product.title}
                className="px-10"
                src={product.image}
              ></img>
              <button
                className="font-display text-sm bg-cyan-50"
                onClick={() => {
                  handleBasketUpdate(product);
                }}
              >
                ADD TO BASKET
              </button>
              <h3 className="px-10 m-1 text-sm lg:text-lg font-display text-cyan-800">
                {product.title}
              </h3>
              <h3 className="px-10 m-1 text-sm lg:text-lg font-display text-cyan-800">
                £{product.price}
              </h3>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
