import { createSlice, current, PayloadAction, Slice } from "@reduxjs/toolkit";
import GameBoardBlock from "../components/multiplicationConnect/GameBoardBlock";
import {
  calculateWinner,
  createGrid,
  SelectedBy,
  WinType,
} from "../pages/api/games/multiplication-connect/gameLogic";
import { RootState } from "./rootReducer";

export enum Stage {
  WELCOME = "WELCOME",
  GAME_PLAY = "GAME_PLAY",
  GAME_RULES = "GAME_RULES",
  GAME_WIN = "GAME_WIN",
  GAME_OVER = "GAME_OVER",
}

export interface MultiplicationConnectState {
  isPlayerOne: boolean;
  grid: GameBoardBlock[];
  stage: Stage;
  newGame: number;
  hasWinner: null | WinType;
}

const initialState: MultiplicationConnectState = {
  isPlayerOne: true,
  grid: createGrid(),
  stage: Stage.WELCOME,
  newGame: 0,
  hasWinner: null,
};

export const multiplicationConnectSlice: Slice = createSlice({
  name: "MultiplicationConnectGame",
  initialState,
  reducers: {
    reloadGrid: (state: MultiplicationConnectState) => {
      state.grid = createGrid();
    },
    blockClick: (
      state: MultiplicationConnectState,
      action: PayloadAction<GameBoardBlock>
    ) => {
      const block = action.payload as GameBoardBlock;
      state.isPlayerOne
        ? (state.grid[block.id].selectedBy = SelectedBy.PlayerOne)
        : (state.grid[block.id].selectedBy = SelectedBy.PlayerTwo);

      const { winType, winningBlocks } = calculateWinner(
        state.grid,
        state.isPlayerOne
      );
      if (winningBlocks) {
        state.stage = Stage.GAME_WIN;
        state.hasWinner = winType;
        state.grid.map((block) => {
          winningBlocks.map(
            (winBlock) =>
              block.id === winBlock && (block.selectedBy = SelectedBy.Winner)
          );
        });
      } else if (winType === WinType.Draw) {
        state.stage = Stage.GAME_OVER;
      }
    },
    togglePlayer: (state: MultiplicationConnectState) => {
      state.isPlayerOne = !state.isPlayerOne;
    },
    setStage: (
      state: MultiplicationConnectState,
      action: PayloadAction<Stage>
    ) => {
      const gameStage = action.payload as Stage;
      state.stage = gameStage;
    },
    setNewGame: (state: MultiplicationConnectState) => {
      state.newGame++;
      state.stage = Stage.GAME_PLAY;
    },
  },
});

export const {
  togglePlayer,
  reloadGrid,
  blockClick,
  setStage,
  setNewGame,
  setGameWin,
} = multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;