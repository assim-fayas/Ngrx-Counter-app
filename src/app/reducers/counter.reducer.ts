
//creation of reducer
import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"

export const initialState = 0

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, { amount }) => state + amount),
    on(decrement, (state) => state - 1),
    on(reset, (reset) => 0)
)   