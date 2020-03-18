import { CounterPayload } from './../actions';
import { COUNTER_ACTION } from './../actions/types';

type State = number;

const initState: State = 0;

const myReducer = (state = initState, action: CounterPayload): State => {
    switch (action.type) {
        case COUNTER_ACTION.INCREMENT:
            if (state < 10) {
                return state + 1;
            }
            return state;
        case COUNTER_ACTION.DECREMENT:
            if (state > 0) {
                return state - 1;
            }
            return state;
        default:
            return state;
    }
};

export default myReducer;
