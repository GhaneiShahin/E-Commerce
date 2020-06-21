import React, { memo } from "react";
import "./Checkout.scss";
import { useSelector } from "react-redux";
import CheckoutItems from "../../components/CheckoutItems/CheckoutItems";
import StripeBtn from "../../components/StripeBtn/StripeBtn";


const Checkout = () => {
  const cartItems = useSelector((state) => state.toggleCart.cartItems);
  const total = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeBtn price={total} />
    </div>
  );
};

export default memo(Checkout);
