import React, { useContext, useEffect, useState } from "react";
import Carticon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";
import "./HeaderCartButton.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [btnActive, setBtnActive] = useState(false);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClases = `cart-btn ${btnActive ? "bump" : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnActive(true);
    const timer = setTimeout(() => {
      setBtnActive(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClases} onClick={onClick}>
      <span>
        <Carticon />
      </span>
      <span>Your Cart</span>
      <span className="cart-number">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
