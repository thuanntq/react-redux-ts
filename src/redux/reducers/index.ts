import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    posts: postReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
