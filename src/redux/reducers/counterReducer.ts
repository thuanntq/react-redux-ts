import { Payload } from "./../actions";
import { COUNTER } from "./../actions/types";

type CounterState = number;

const counterReducer = (state: CounterState = 0, action: Payload): CounterState => {
  switch (action.type) {
    case COUNTER.INCREMENT:
      if (state < 10) {
        return state + 1;
      }
      return state;
    case COUNTER.DECREMENT:
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
};

export default counterReducer;
