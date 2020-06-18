import React from "react";
import "./CartDropdown.scss";
import CostumButton from "../CostumButton/CostumButton";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.toggleCard.cartItems);
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CostumButton>GO TO CHECKOUT</CostumButton>
    </div>
  );
};

export default CartDropdown;
