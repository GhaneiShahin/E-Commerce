const { TOGGLE_CARD, ADD_ITEM } = require("../actionTypes");

export const toggleCardAction = () => ({
  type: TOGGLE_CARD,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
