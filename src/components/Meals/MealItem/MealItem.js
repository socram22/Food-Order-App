import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

const Mealitem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const fprice = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className="meal-item-content">
      <div>
        <h3>{name}</h3>
        <div className="meal-item-desc">{description}</div>
        <div className="meal-item-price">{fprice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Mealitem;
