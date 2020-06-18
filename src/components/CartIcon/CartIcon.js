import React, { memo } from "react";
import { ReactComponent as Basket } from "../../assets/basket.svg";
import "./CartIcon.scss";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART } from "../../store/actions/actionTypes";

const CartIcon = () => {
  const cartItems = useSelector((state) =>
    state.toggleCart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
  );
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch({ type: TOGGLE_CART })}>
      <Basket className="shopping-icon" />
      <span className="item-count">{cartItems}</span>
    </div>
  );
};

export default memo(CartIcon);
