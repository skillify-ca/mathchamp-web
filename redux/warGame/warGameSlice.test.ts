import reducer, {
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

const drawInitialState = {
  cardListPlayerOne: [
    { question: "2^2 + 16", answer: 0 },
    { question: "2*(-4) + 10", answer: 1 },
    { question: "1*(-5) + 14", answer: 2 },
    { question: "1*(-3) + 14", answer: 3 },
    { question: "1*(-6) + 14", answer: 5 },
    { question: "1*(-7) + 14", answer: 5 },
  ],
  cardListPlayerTwo: [
    { question: "2^1 + 12", answer: 6 },
    { question: "2^3 + 13", answer: 7 },
    { question: "2*12 + (-6)", answer: 8 },
    { question: "1*(-2) + 14", answer: 9 },
    { question: "1*(-8) + 14", answer: 4 },
    { question: "1*(-9) + 14", answer: 11 },
  ],
  drawListPlayerOne: [],
  drawListPlayerTwo: [],
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
  expect(reducer(initialState, { type: "no action" })).toEqual(initialState);
});

test("test player one ready action", () => {
  expect(reducer(initialState, setPlayerReady(1))).toEqual({
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
  expect(reducer(initialState, setPlayerReady(2))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  expect(reducer(secondState, startRound(null))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, increasePlayerScore(1))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, increasePlayerScore(2))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, finishRound(1))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, finishRound(2))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  const fourthState = reducer(thirdState, finishRound(1));
  const fifthState = reducer(fourthState, setPlayerReady(1));
  const sixthState = reducer(fifthState, setPlayerReady(2));
  const seventhState = reducer(sixthState, startRound(null));
  const eighthState = reducer(seventhState, finishRound(1));
  const ninthState = reducer(eighthState, setPlayerReady(1));
  const tenthState = reducer(ninthState, setPlayerReady(2));
  const eleventhState = reducer(tenthState, startRound(null));
  const twelvethState = reducer(eleventhState, finishRound(1));
  expect(reducer(twelvethState, finishRound(1))).toEqual({
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
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  const fourthState = reducer(thirdState, finishRound(1));
  const fifthState = reducer(fourthState, setPlayerReady(1));
  const sixthState = reducer(fifthState, setPlayerReady(2));
  const seventhState = reducer(sixthState, startRound(null));
  const eighthState = reducer(seventhState, finishRound(1));
  const ninthState = reducer(eighthState, setPlayerReady(1));
  const tenthState = reducer(ninthState, setPlayerReady(2));
  const eleventhState = reducer(tenthState, startRound(null));
  const twelvethState = reducer(eleventhState, finishRound(1));
  const thirteenthState = reducer(twelvethState, finishRound(1));
  expect(reducer(thirteenthState, resetRound(initialState))).toEqual({
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

test("test if there is a draw", () => {
  const firstState = reducer(drawInitialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, finishRound(0))).toEqual({
    cardListPlayerOne: [
      { question: "1*(-7) + 14", answer: 5 },
      { question: "2^2 + 16", answer: 0 },
      { question: "2*(-4) + 10", answer: 1 },
      { question: "1*(-5) + 14", answer: 2 },
      { question: "1*(-3) + 14", answer: 3 },
      { question: "2^1 + 12", answer: 6 },
      { question: "2^3 + 13", answer: 7 },
      { question: "2*12 + (-6)", answer: 8 },
      { question: "1*(-2) + 14", answer: 9 },
      { question: "1*(-6) + 14", answer: 5 },
      { question: "1*(-8) + 14", answer: 4 },
    ],
    cardListPlayerTwo: [{ question: "1*(-9) + 14", answer: 11 }],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: true,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
    drawListPlayerOne: [],
    drawListPlayerTwo: [],
    playerOneScoring: 0,
    playerTwoScoring: 0,
  });
});