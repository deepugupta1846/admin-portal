import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
export const rootReducer = combineReducers({
  userReducer,
  authReducer,
});
