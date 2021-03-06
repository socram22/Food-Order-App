import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="cart-item-li">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <button className="delete-all" onClick={props.onRemoveAll}>
            X
          </button>
        </div>
        <div>
          <h2>{props.name}</h2>
          <div className="cart-item-li-summary">
            <span className="cart-item-li-price">{price}</span>
            <span className="cart-item-li-amount">x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className="cart-item-li-actions">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
