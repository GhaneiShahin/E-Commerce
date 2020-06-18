import { TOGGLE_CARD, ADD_ITEM } from "../../actions/actionTypes";
import { addItemToCart } from "../../cartUtils";

const initialState = {
  hidden: false,
  cartItems: [],
};

export const toggleCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CARD:
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
