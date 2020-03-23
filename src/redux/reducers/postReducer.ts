import { PostPayload } from './../actions';
import { FETCH_POST_BEGIN, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './../actions/types';
import { PostInterface } from './../../components/constants/types';
type MyState = {
    posts: PostInterface[];
    isLoading: boolean;
    errors: any;
};

const initState: MyState = {
    posts: [],
    isLoading: false,
    errors: null,
};
const myReducer = (state = initState, action: PostPayload): MyState => {
    switch (action.type) {        
        case FETCH_POST_BEGIN:
            console.log('fetch post start');
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_POST_SUCCESS:
            console.log('fetch post success');            
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
            };
        case FETCH_POST_FAILURE:
            console.log('fetch post failure');
            return {                
                posts: [],
                isLoading: false,
                errors: 'loi roi',
            };
            
        default:
            return state;
    }
};

export default myReducer;