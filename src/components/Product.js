// import React, { useState } from "react";

export default function Product(props) {
    // console.log(props);
  return (
    
    
    <div className="row">
      <div className="col-4">
        <h3>
          {props.product.name}{" "}
          <span className="badge bg-danger">₹{props.product.price}</span>
        </h3>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger" onClick = {() => props.decrement(props.index)}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick = {() => props.increment(props.index)}>
            +
          </button>

        </div>
      </div>
      <div className="col-3">{props.product.quantity * props.product.price}</div>
      <div className="col-2">
      <button type="button" className="btn btn-danger" onClick = {() => props.remove(props.index)}>
            Remove
          </button>
      </div>
    </div>
  );
}
