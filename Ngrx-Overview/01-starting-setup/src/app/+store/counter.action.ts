import { createAction, props } from "@ngrx/store";
//Define the initial action and the type of the action
export const increment = createAction(
    '[Counter] Increment',

    //You can attach actions to your actions
    props<{
        value: number
    }>()
);

export const decrease = createAction(
    '[Counter] Decrease'
)