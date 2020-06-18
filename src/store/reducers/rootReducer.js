import {combineReducers} from 'redux'
import { userReducer } from './userReducers/userReducer'
import { toggleCartReducer } from './cartReducers/cartReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  toggleCart: toggleCartReducer
})