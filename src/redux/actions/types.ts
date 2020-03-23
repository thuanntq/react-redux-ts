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


export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';