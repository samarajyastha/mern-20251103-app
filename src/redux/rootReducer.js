import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import counterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  counter: counterReducer,
  userPreferences: userPreferenceReducer,
});

export default rootReducer;
