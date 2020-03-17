import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { decremet, increment } from "./redux/actions";
import { STORE } from "./redux/actions/types";
import { Store } from "redux";

function App() {
  const store:Store = useStore();
  console.log(store.getState());
  
  const counter = useSelector((state: STORE) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}> (+) Increment</button>
      <button onClick={() => dispatch(decremet())}> (-) Decrement</button>
    </div>
  );
}

export default App;
