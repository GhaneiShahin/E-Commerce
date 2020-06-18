import React from "react";
import "./CartDropdown.scss";
import CostumButton from "../CostumButton/CostumButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CostumButton>GO TO CHECKOUT</CostumButton>
    </div>
  );
};

export default CartDropdown;
