import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./userReducers/userReducer";
import { toggleCartReducer } from "./cartReducers/cartReducer";
import { directoryReducer } from "./directoryReducers/directoryReducer";
import { shopReducer } from "./shopReducers/shopReducers";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toggleCart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  toggleCart: toggleCartReducer,
  directory: directoryReducer,
  shopData: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
