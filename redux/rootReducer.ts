import { combineReducers, Slice } from "@reduxjs/toolkit";
import {
  connectFourReducer,
  ConnectFourState,
} from "./connectFour/connectFourSlice";
import {
  longestStreakReducer,
  LongestStreakState,
} from "./longestStreak/longestStreakSlice";

type State = {
  [x: string]: any;
  longestStreakState: LongestStreakState;
  multiplicationConnect: ConnectFourState;
};

const rootReducer = combineReducers({
  longestStreakState: longestStreakReducer,
  multiplicationConnect: connectFourReducer,
});

export type RootState = State;

export default rootReducer;
