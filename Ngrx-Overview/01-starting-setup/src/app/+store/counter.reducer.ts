import { createReducer, on } from "@ngrx/store";
import { decrease, increment } from "./counter.action";

//Has to hold an initial state

const initialState = 0; //Can house any data type

export const counterReducer = createReducer(
    initialState,
    // on(increment, (state) => state + 1),

    on(
        increment, (state, action) =>
        state + action.value
    ),


    on(decrease, (state) => state - 1)
);



