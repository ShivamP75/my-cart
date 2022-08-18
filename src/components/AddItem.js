import React, { useState } from "react";

export default function AddItem(props) {
    let [name, setName] = new useState("");
    let [price, setPrice] = new useState(0);
    
  return (
    <form className="row mb-5 center" onSubmit={(e) => {
        e.preventDefault();
        props.addItem(name, Number(price))
    }}>
        <div className="col-2"></div>
      <div className="mb-3 col-3">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="productName"
        onChange={(e) => {
            setName(e.currentTarget.value);
        }}
        value = {name}
        />
      </div>
      <div className="form-group mb-3 col-3">
        <label htmlFor="exampleInputPassword1">Price</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          name="productPrice"
        onChange={(e) => {
            setPrice(Number(e.currentTarget.value));
        }}
        value = {price}
        />
      </div>
      <div className="col-2 mt-4">
        <button type="submit" className="btn btn-primary">
            Add
        </button>
        </div>
        <div className="col-2"></div>
    </form>
  );
}
