import { combineReducers } from "redux";
import auth from "./auth.reducer";
import coupons from "./coupons.reducer";

export default combineReducers({ auth, coupons });
