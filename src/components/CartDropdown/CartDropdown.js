import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import "./CartDropdown.scss";
import CostumButton from "../CostumButton/CostumButton";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartAction } from "../../store/actions/cartActions/cartAction";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.toggleCart.cartItems);
  const dispatch = useDispatch()
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CostumButton onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartAction())
      }}>
        GO TO CHECKOUT
      </CostumButton>
    </div>
  );
};

export default withRouter(memo(CartDropdown));
