import React from "react";
import { ReactComponent as Basket } from "../../assets/basket.svg";
import "./CartIcon.scss";
import { useDispatch } from "react-redux";
import { TOGGLE_CARD } from "../../store/actions/actionTypes";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch({ type: TOGGLE_CARD })}>
      <Basket className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
