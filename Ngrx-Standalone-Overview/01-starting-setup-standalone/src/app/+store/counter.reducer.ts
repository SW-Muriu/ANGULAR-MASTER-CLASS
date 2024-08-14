import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

//Has to hold an initial state

const initialState = 0; //Can house any data type

export const counterReducer = createReducer(initialState,
    //Action handlers
    on(increment, (state) => state + 1),
    on(decrement, (state, action)=> state - action.value)
    
);

