import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Store } from "redux";
import { decremet, increment } from "./redux/actions";
import { MYSTORE } from "./redux/actions/types";

const App:React.FC = React.memo(() =>{

  const store:Store = useStore();
  
  const counter = useSelector((state: MYSTORE) => state.counter);

  const dispatch = useDispatch();

  console.log(store.getState());

  const changeInvalid = !(counter < 10 || counter > 0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {changeInvalid && <h2>Couter invalid to change value</h2>}      
      <button onClick={() => dispatch(increment())}> (+) Increment</button>
      <button onClick={() => dispatch(decremet())}> (-) Decrement</button>
    </div>
  );
});

export default App;
