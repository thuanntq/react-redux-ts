import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import { MYSTORE } from "./../actions/types";

export default combineReducers<MYSTORE>({
  counter: counterReducer,
  todos: todoReducer,
});
