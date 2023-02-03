import { BlockState } from "../../components/longestStreak/MultiplicationBlock";
import {
  handlePlayerSelect,
  LongestStreakState,
  STAGE,
  GameLevel,
  longestStreakReducer,
} from "./longestStreakSlice";

// Arrange create initialState
// Act longestStreakReducer(initialState, action)
// Assert expect()

const initialState: LongestStreakState = {
  blocks: [
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "6x6",
      value: 36,
      isProduct: false,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "36",
      value: 36,
      isProduct: true,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x9",
      value: 72,
      isProduct: false,
      state: BlockState.NOT_SELECTED,
    },
  ],
  stage: STAGE.PLAY_GAME,
  isPlayerSelecting: false,
  reset: false,
  handlePlayerSelect: 0,
};

test("should return the initial state", () => {
  expect(longestStreakReducer(initialState, { type: "no action" })).toEqual(
    initialState
  );
});

test("test selecting one block", () => {
  // Arrange
  // Act
  // Assert

  const finalState = {
    blocks: [
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.HIGHLIGHTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
    ],
    currentlySelectedBlock: 1,
    handlePlayerSelect: 0,
    playerName: "",
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: true,
    reset: false,
  };
  expect(longestStreakReducer(initialState, handlePlayerSelect(1))).toEqual(
    finalState
  );
});

test("test selecting two blocks should trigger AI selection", () => {
  // Arrange
  const finalState = {
    blocks: [
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
    ],
    stage: STAGE.CALCULATE_WINNER,
    isPlayerSelecting: false,
    playerName: "",
    currentlySelectedBlock: 1,
    handlePlayerSelect: 0,
    reset: false,
  };

  //Act
  const firstState = longestStreakReducer(initialState, handlePlayerSelect(1));
  const secondState = longestStreakReducer(firstState, handlePlayerSelect(2));
  // Assert
  expect(secondState).toEqual(finalState);
});

test("test selecting invalid blocks", () => {
  const finalState = {
    blocks: [
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.HIGHLIGHTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: true,
    playerName: "",
    currentlySelectedBlock: 0,
    handlePlayerSelect: 0,
    reset: false,
  };

  //Act
  const firstState = longestStreakReducer(initialState, handlePlayerSelect(0));
  const secondState = longestStreakReducer(firstState, handlePlayerSelect(2));
  // Assert
  expect(secondState).toEqual(finalState);
});
