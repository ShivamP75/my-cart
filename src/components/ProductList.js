import React from "react";
import Product from "./Product";
export default function ProductList(props) {
  // console.log(props);
  return (

      
      (props.product.length > 0) ?
        props.product.map((product, i) => {
          return (
            <Product
              product={product}
              key={i}
              index={i}
              increment={props.increment}
              decrement={props.decrement}
              remove={props.remove}
            />
          );
        }) : <h1 className="text-center">No item in the cart</h1>
  );
}



