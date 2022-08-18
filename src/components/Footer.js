import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom text-center">
      <div className="col-4">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.reset()}
        >
          Reset
        </button>
      </div>
      <div className=" col-4">{props.totalAmount}</div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.pay()}
        >
          Pay
        </button>
      </div>
    </div>
  );
}
