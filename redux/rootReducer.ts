import { combineReducers, Slice } from "@reduxjs/toolkit";
import {
  bakersRackBSlice,
  BakersRackBState,
  bakeryReducer,
} from "./bakery/bakerySlice";
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
  bakeryState: BakersRackBState;
};

const rootReducer = combineReducers({
  longestStreakState: longestStreakReducer,
  multiplicationConnect: connectFourReducer,
  bakeryState: bakeryReducer,
});

export type RootState = State;

export default rootReducer;
