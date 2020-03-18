export enum COUNTER_ACTION {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

export enum TODO_ACTION {
  FETCH_TODO_LIST = "FETCH_TODO_LIST",  
}

export type MYSTORE = {
  counter: number;
  todos: any;
};
