import {
  warGameReducer,
  setPlayerReady,
  startRound,
  finishRound,
  increasePlayerScore,
  resetRound,
} from "./warGameSlice";

const initialState = {
  cardListPlayerOne: [
    { answer: 0, question: "2^2 + 16" },
    { answer: 1, question: "" },
    { answer: 2, question: "" },
  ],
  cardListPlayerTwo: [
    { answer: 3, question: "2^1 + 12" },
    { answer: 4, question: "" },
    { answer: 5, question: "" },
  ],
  currentRoundIndex: 0,
  playerOneReady: false,
  playerTwoReady: false,
  playerOneWon: false,
  playerTwoWon: false,
  gameOver: false,
  playerOneScoring: 0,
  playerTwoScoring: 0,
};

test("should return the initial state", () => {
  expect(warGameReducer(undefined, { type: "no action" })).toEqual(
    initialState
  );
});

test("test player one ready action", () => {
  expect(warGameReducer(initialState, setPlayerReady(1))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: false,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test player two ready action", () => {
  expect(warGameReducer(initialState, setPlayerReady(2))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test both players ready and start round action", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  expect(warGameReducer(secondState, startRound(null))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: {
      answer: 0,
      question: "2^2 + 16",
    },
    playerTwoCurrentCard: {
      answer: 3,
      question: "2^1 + 12",
    },
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test if player one scored", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  expect(warGameReducer(thirdState, increasePlayerScore(1))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: {
      answer: 0,
      question: "2^2 + 16",
    },
    playerTwoCurrentCard: {
      answer: 3,
      question: "2^1 + 12",
    },
    playerOneScoring: 1,
    playerTwoScoring: 0,
  });
});

test("test if player two scored", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  expect(warGameReducer(thirdState, increasePlayerScore(2))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: {
      answer: 0,
      question: "2^2 + 16",
    },
    playerTwoCurrentCard: {
      answer: 3,
      question: "2^1 + 12",
    },
    playerOneScoring: 0,
    playerTwoScoring: 1,
  });
});

test("test if player one won the round", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  expect(warGameReducer(thirdState, finishRound(1))).toEqual({
    cardListPlayerOne: [
      { answer: 1, question: "" },
      { answer: 2, question: "" },
      { answer: 0, question: "2^2 + 16" },
      { answer: 3, question: "2^1 + 12" },
    ],
    cardListPlayerTwo: [
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: true,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test if player two won the round", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  expect(warGameReducer(thirdState, finishRound(2))).toEqual({
    cardListPlayerOne: [
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 4, question: "" },
      { answer: 5, question: "" },
      { answer: 3, question: "2^1 + 12" },
      { answer: 0, question: "2^2 + 16" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: false,
    playerTwoWon: true,
    gameOver: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test if game is over", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  const fourthState = warGameReducer(thirdState, finishRound(1));
  const fifthState = warGameReducer(fourthState, setPlayerReady(1));
  const sixthState = warGameReducer(fifthState, setPlayerReady(2));
  const seventhState = warGameReducer(sixthState, startRound(null));
  const eighthState = warGameReducer(seventhState, finishRound(1));
  const ninthState = warGameReducer(eighthState, setPlayerReady(1));
  const tenthState = warGameReducer(ninthState, setPlayerReady(2));
  const eleventhState = warGameReducer(tenthState, startRound(null));
  const twelvethState = warGameReducer(eleventhState, finishRound(1));
  expect(warGameReducer(twelvethState, finishRound(1))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 3, question: "2^1 + 12" },
      { answer: 1, question: "" },
      { answer: 4, question: "" },
      { answer: 2, question: "" },
      { answer: 5, question: "" },
    ],
    cardListPlayerTwo: [],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: true,
    playerTwoWon: false,
    gameOver: true,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});

test("test reset state", () => {
  const firstState = warGameReducer(initialState, setPlayerReady(1));
  const secondState = warGameReducer(firstState, setPlayerReady(2));
  const thirdState = warGameReducer(secondState, startRound(null));
  const fourthState = warGameReducer(thirdState, finishRound(1));
  const fifthState = warGameReducer(fourthState, setPlayerReady(1));
  const sixthState = warGameReducer(fifthState, setPlayerReady(2));
  const seventhState = warGameReducer(sixthState, startRound(null));
  const eighthState = warGameReducer(seventhState, finishRound(1));
  const ninthState = warGameReducer(eighthState, setPlayerReady(1));
  const tenthState = warGameReducer(ninthState, setPlayerReady(2));
  const eleventhState = warGameReducer(tenthState, startRound(null));
  const twelvethState = warGameReducer(eleventhState, finishRound(1));
  const thirteenthState = warGameReducer(twelvethState, finishRound(1));
  expect(warGameReducer(thirteenthState, resetRound(null))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "2^2 + 16" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "2^1 + 12" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: false,
    playerTwoWon: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
    gameOver: false,
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});
