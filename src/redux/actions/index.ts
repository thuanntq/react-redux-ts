import { COUNTER_ACTION, TODO_ACTION } from './types';

/** COUNTER  */
export interface CounterPayload {
    type: COUNTER_ACTION;
}

export const increment = (): CounterPayload => ({
    type: COUNTER_ACTION.INCREMENT,
});

export const decremet = (): CounterPayload => ({
    type: COUNTER_ACTION.DECREMENT,
});

/** TODO */
export interface TodoPayload {
    type: TODO_ACTION;
    payload: any;
}

export const fetchTodo = (payload: any): TodoPayload => ({
    type: TODO_ACTION.FETCH_TODO_LIST,
    payload: payload,
});
