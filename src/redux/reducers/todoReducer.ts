import { TodoPayload } from "./../actions";
import {TODO_ACTION } from "./../actions/types";

interface TODO {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
type MyState = {
    todos: TODO[]
};

const initState: MyState = {
    todos: []
}
const myReducer = (state= initState, action: TodoPayload): MyState => {
  switch (action.type) {
    case TODO_ACTION.FETCH_TODO_LIST:      
      return {
        todos: [...action.payload]
      };
    default:
      return state;
  }
};

export default myReducer;
