import { TodoPayload } from './../actions';
import { TODO_ACTION } from './../actions/types';
import {TodoInterface} from './../../components/constants/types';
type MyState = {
    todos: TodoInterface[];
};

const initState: MyState = {
    todos: [],
};
const myReducer = (state = initState, action: TodoPayload): MyState => {
    switch (action.type) {
        case TODO_ACTION.FETCH_TODO_LIST:
            console.log(action.payload);
            return {
                todos: action.payload,
            };
        default:
            return state;
    }
};

export default myReducer;
