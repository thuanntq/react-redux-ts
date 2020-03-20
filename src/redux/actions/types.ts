import { TodoInterface } from "../../components/constants/types";

export enum COUNTER_ACTION {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export enum TODO_ACTION {
    FETCH_TODO_LIST = 'FETCH_TODO_LIST',
    EDIT_SUCCESS = 'EDIT_SUCCESS',
    DELETE_SUCCESS = 'DELETE_SUCCESS',
}

export type MYSTORE = {
    counter: number;
    todos: TodoInterface[];
};
