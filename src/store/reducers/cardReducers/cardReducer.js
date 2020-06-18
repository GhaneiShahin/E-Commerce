import {TOGGLE_CARD} from '../../actions/actionTypes';

const initialState = {
  hidden: false
}

export const toggleCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CARD:
      return {
        ...state,
        hidden: !state.hidden 
      }
  
    default:
      return state;
  }
}

