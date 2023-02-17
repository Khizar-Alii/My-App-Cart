import React from "react";
import Product from "../My Components/Product";

function ProductList({
  myProductList,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) {
  return myProductList.length > 0 ? (
    myProductList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          index={i}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      );
    })
  ) : (
    <h2>No Products in The Cart</h2>
  );
}

export default ProductList;
