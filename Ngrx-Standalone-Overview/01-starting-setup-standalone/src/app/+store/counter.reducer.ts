import { createReducer } from "@ngrx/store";

//Has to hold an initial state

const initialState = 0; //Can house any data type

export const counterReducer = createReducer(initialState);

