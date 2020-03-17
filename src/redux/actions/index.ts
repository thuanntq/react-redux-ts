import { COUNTER } from "./types";

export interface Payload {
  type: COUNTER;
}

export const increment = (): Payload => ({
  type: COUNTER.INCREMENT
});

export const decremet = (): Payload => ({
  type: COUNTER.DECREMENT
});
