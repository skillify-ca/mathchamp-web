import { combineReducers } from "@reduxjs/toolkit";
import longestStreakSlice, { LongestStreakState } from "./longestStreakSlice";
import {
  multiplicationConnectSlice,
  MultiplicationConnectState,
} from "./multiplicationConnectSlice";

type State = {
  [x: string]: any;
  longestStreakState: LongestStreakState;
  multiplicationConnect: MultiplicationConnectState;
};
const longestStreakReducer = longestStreakSlice;
const multiplicationConnectReducer = multiplicationConnectSlice.reducer;

const rootReducer = combineReducers({
  longestStreakState: longestStreakReducer,
  multiplicationConnect: multiplicationConnectReducer,
});

export type RootState = State;

export default rootReducer;
