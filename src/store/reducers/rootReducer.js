import {combineReducers} from 'redux'
import { userReducer } from './userReducers/userReducer'
import { toggleCardReducer } from './cardReducers/cardReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  toggleCard: toggleCardReducer
})