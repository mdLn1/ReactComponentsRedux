import authReducer from "./authReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authReducer,
  counterReducer
});

export default allReducers;
