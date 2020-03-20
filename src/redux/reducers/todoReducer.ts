import { TodoPayload } from './../actions';
import { TODO_ACTION } from './../actions/types';
import { TodoInterface } from './../../components/constants/types';
type MyState = {
    todos: TodoInterface[];
};

const initState: MyState = {
    todos: [],
};
const myReducer = (state = initState, action: TodoPayload): MyState => {
    switch (action.type) {
        case TODO_ACTION.FETCH_TODO_LIST:
            return {
                todos: action.payload,
            };
        case TODO_ACTION.EDIT_SUCCESS:
            return {
                todos: action.payload,
            };
        case TODO_ACTION.DELETE_SUCCESS:
            return state;
        default:
            return state;
    }
};

export default myReducer;
