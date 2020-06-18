import { TOGGLE_CART, ADD_ITEM, CLEAR_CART_ITEMS, REMOVE_ITEM } from "../actionTypes";

export const toggleCartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearCartItems = (item) => ({
  type: CLEAR_CART_ITEMS,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
})