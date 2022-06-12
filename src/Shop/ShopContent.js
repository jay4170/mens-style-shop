import React from "react";

export default function ShopContent(props) {
  const products = props.products;

  return (
    <ul>
      {products.map((product) => {
        console.log(product);
        return (
          <li>
            <h3>{product.title}</h3>
          </li>

        );
      })}
    </ul>
  );
}
