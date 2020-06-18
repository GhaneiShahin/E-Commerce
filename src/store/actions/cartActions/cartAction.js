const { TOGGLE_CART, ADD_ITEM } = require("../actionTypes");

export const toggleCartAction = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
