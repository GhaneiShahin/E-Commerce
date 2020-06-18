import React from "react";
import "./CheckoutItems.scss";
import { useDispatch } from "react-redux";
import { clearCartItems, addItem, removeItem } from "../../store/actions/cartActions/cartAction";

const CheckoutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearCartItems(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
