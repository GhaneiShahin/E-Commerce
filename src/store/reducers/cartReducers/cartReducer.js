import {
  TOGGLE_CART,
  ADD_ITEM,
  CLEAR_CART_ITEMS,
  REMOVE_ITEM,
} from "../../actions/actionTypes";
import { addItemToCart, removeItemFromCart } from "../../cartUtils";

const initialState = {
  hidden: false,
  cartItems: [],
};

export const toggleCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
