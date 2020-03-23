import { COUNTER_ACTION, TODO_ACTION } from './types';
import { TodoInterface, PostInterface } from '../../components/constants/types';
import { FETCH_POST_BEGIN, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './../actions/types';
import { Dispatch } from 'redux';

/****************************** COUNTER *******************************/
export interface CounterPayload {
    type: COUNTER_ACTION;
}

export const increment = (): CounterPayload => ({
    type: COUNTER_ACTION.INCREMENT,
});

export const decremet = (): CounterPayload => ({
    type: COUNTER_ACTION.DECREMENT,
});

/****************************** TODO *******************************/
export interface TodoPayload {
    type: TODO_ACTION;
    payload: any;
}

export const fetchTodo = (payload: TodoInterface[]): TodoPayload => ({
    type: TODO_ACTION.FETCH_TODO_LIST,
    payload: payload,
});

export const updateTodo = (payload: TodoInterface[]): TodoPayload => ({
    type: TODO_ACTION.FETCH_TODO_LIST,
    payload: payload,
});

/****************************** POST *******************************/
export interface PostPayload {
    type: string;
    payload: any;
}

export const fetchPostsBegin = (): PostPayload => ({
    type: FETCH_POST_BEGIN,
    payload: null,
});

export const fetchPostsSuccess = (posts: PostInterface[]): PostPayload => ({
    type: FETCH_POST_SUCCESS,
    payload: posts,
});

export const fetchPostsFailure = (error: string): PostPayload => ({
    type: FETCH_POST_FAILURE,
    payload: error,
});

export const fetchPosts = () => {
    return (dispatch: Dispatch) => {
        // displat begin
        dispatch(fetchPostsBegin());

        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(json => {
                // dispatch success
                dispatch(fetchPostsSuccess(json));
            })
            .catch(e => {
                // dispatch failure
                dispatch(fetchPostsFailure(e.message));
            });
    };
};