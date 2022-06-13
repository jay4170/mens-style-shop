import React from "react";

export default function ShopContent(props) {
  const products = props.products;

  return (
    <ul className="grid grid-cols-1 : sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
      {products.map((product) => {
        console.log(product);
        return (
          <div className="text-center ">
            <li className="justify-center ">
              <img
                alt={product.title}
                className="px-10"
                src={product.image}
              ></img>

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
