import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { STORE } from "./../actions/types";

export default combineReducers<STORE>({
  counter: counterReducer
});
