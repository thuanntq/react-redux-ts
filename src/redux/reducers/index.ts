import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { MYSTORE } from "./../actions/types";

export default combineReducers<MYSTORE>({
  counter: counterReducer
});
