import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export const Item = (props) => {
  return (
    <div className="item my-3">
      <Link to={`/product/${props.id}`}>
        <Image
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
          fluid
          rounded
        ></Image>
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"> ${props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};
export default Item;
