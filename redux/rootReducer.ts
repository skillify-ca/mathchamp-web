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
import { warGameReducer, WarGameState } from "./warGame/warGameSlice";

type State = {
  [x: string]: any;
  longestStreakState: LongestStreakState;
  multiplicationConnect: ConnectFourState;
  bakeryState: BakersRackBState;
  warGameState: WarGameState;
};

const rootReducer = combineReducers({
  longestStreakState: longestStreakReducer,
  multiplicationConnect: connectFourReducer,
  bakeryState: bakeryReducer,
  warGameState: warGameReducer,
});

export type RootState = State;

export default rootReducer;
