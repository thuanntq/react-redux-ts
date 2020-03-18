import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Store } from "redux";
import { decremet, fetchTodo, increment } from "./redux/actions";
import { MYSTORE } from "./redux/actions/types";

const App:React.FC = React.memo(() =>{

  const store:Store = useStore();
  const state:MYSTORE = store.getState();
  const {counter, todos} = state;
  const dispatch = useDispatch();

  const changeInvalid = !(counter < 10 || counter > 0);

  useEffect(() => {    
    if(todos?.todos?.length === 0){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => dispatch(fetchTodo(json)));
    }
    
  });

  console.log('my todos: ', todos);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {changeInvalid && <h2>Couter invalid to change value</h2>}      
      <button onClick={() => dispatch(increment())}> (+) Increment</button>
      <button onClick={() => dispatch(decremet())}> (-) Decrement</button>

      <div>
        <h2>Todo</h2>
        </div>
    </div>
  );
});

export default App;
