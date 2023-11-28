import Product from "./Product";
import React from "react";
function ProductList(props) {
  return props.productlist.length > 0 ? (
    props.productlist.map((product, i) => {
      return (
        <Product
          Product={product}
          key={i}
          increamentQuantity={props.increamentQuantity}
          decreamentQuantity={props.decreamentQuantity}
          index={i}
          removeProduct={props.removeProduct}
        />
      );
    })
  ) : (
    <h1 className="constainer text-center">No Product Available</h1>
  );
}

export default ProductList;
