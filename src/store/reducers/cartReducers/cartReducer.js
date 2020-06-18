import { TOGGLE_CART, ADD_ITEM } from "../../actions/actionTypes";
import { addItemToCart } from "../../cartUtils";

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
    default:
      return state;
  }
};
