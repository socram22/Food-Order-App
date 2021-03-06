import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const clearCartHandler = () => {
    cartCtx.clearCart();
  };
  const removeAllHandler = (id) => {
    cartCtx.removeAll(id);
  };

  const cartItems = (
    <ul
      style={{
        margin: "0",
        padding: "0",
        maxHeight: "20rem",
        overflowY: "scroll",
      }}
    >
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))} */}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemoveAll={removeAllHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className="cart-total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="cart-actions">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            {hasItems && (
              <button className="cart-btn-close" onClick={clearCartHandler}>
                Clear
              </button>
            )}
          </div>
          <div>
            <button className="cart-btn-close" onClick={onClose}>
              Close
            </button>
            {hasItems && <button className="cart-btn-order">Order</button>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
