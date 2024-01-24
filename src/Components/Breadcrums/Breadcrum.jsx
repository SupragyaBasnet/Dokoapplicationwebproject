import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  // Check if product is defined and has the expected properties
  if (!product || !product.category || !product.name) {
    // Handle the case where product is undefined or lacks expected properties
    return <div className="breadcrum">Invalid Product Data</div>;
  }

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
