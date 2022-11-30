import { from } from "@apollo/client";
import { useEffect, useState } from "react";
import BlockComponent from "../../components/alienPathway/Block";
import { Button } from "../../components/ui/Button";
import { getRndInteger } from "../api/random";
import generateScore from "../../components/alienPathway/GenerateScore";
import checkForWinner from "../../components/alienPathway/CheckForWinner";
import { GraphQLID, validate } from "graphql";
import AlienGameBoard from "../../components/alienPathway/AlienGameBoard";
import { getEnvironmentData } from "worker_threads";
// Functions, hooks, and data structures ending with 2 are made for player two
// ie. userProgress stores players one's progress and userProgress2 stores players two's progress

// These userProgress objects are used to store the progress
// The key represents the row number and the corresponding value stores the number of tiles correctly solved in that row
let userProgress = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
let userProgress2 = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
export default function AlienPathwayV2() {
  // randomNumber represents the roll of the players die
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);

  // userIndex used to determine which block on the gameboard to highlight yellow after the dice roll
  const [userIndex, setUserIndex] = useState(-1);
  const [userIndex2, setUserIndex2] = useState(-1);

  // userScore represents the number of rows completed
  // This is stored as a value of 6 in the userProgress object
  const [userScore, setUserScore] = useState(0);
  const [userScore2, setUserScore2] = useState(0);

  // sets user score to the number of values equal to 6 in userProgress Object
  // handler for score to prevent render loop
  const [validationState, setValidationState] = useState(false);
  const [validationState2, setValidationState2] = useState(true);

  // For gameboard component, creates gameboard ID's from 1 to 42
  function createGrid() {
    let gridList = [];
    for (let i = 0; i < 36; i++) {
      gridList.push({
        id: i,
      });
    }
    return gridList;
  }

  const sampleGrid = createGrid();
  // handler to set UserScore
  const handleUserScore = () => {
    setUserScore(generateScore(userProgress));
  };
  const handleUserScore2 = () => {
    setUserScore2(generateScore(userProgress2));
  };

  // handler for dice button validation
  const handleValidateFunction = (bool: boolean) => {
    setValidationState(bool);
  };
  const handleValidateFunction2 = (bool: boolean) => {
    setValidationState2(bool);
  };

  // This useEffect checks for the existence of a winner and alerts when someone has won
  useEffect(() => {
    checkForWinner(userScore);
    checkForWinner(userScore2);
  }, [userScore, userScore2]);

  // Handler for the dice button
  // This function is called when the user presses the dice button
  const handleOnClick = () => {
    // diceRolls is one of 1,2,3,4,5,6
    let diceRoll = getRndInteger(1, 7);
    setRandomNumber(diceRoll);
    while (userProgress[diceRoll] == 6) {
      diceRoll = getRndInteger(1, 7);
      setRandomNumber(diceRoll);
    }
    // UserProgress tracks frequency of diceRoll to keep track of blocks on the gameboard
    let rowNumber = diceRoll - 1;
    let colNumber = userProgress[diceRoll];
    let index = rowNumber * 6 + colNumber;
    setUserIndex(index);
  };

  const incrementUserProgress = () => {
    userProgress[randomNumber]++;
  };

  const incrementUserProgress2 = () => {
    userProgress2[randomNumber2]++;
  };

  const handleOnClick2 = () => {
    // diceRolls is one of 1,2,3,4,5,6
    let diceRoll2 = getRndInteger(1, 7);
    setRandomNumber2(diceRoll2);
    while (userProgress2[diceRoll2] == 6) {
      diceRoll2 = getRndInteger(1, 7);
      setRandomNumber2(diceRoll2);
    }
    // UserProgress tracks frequency of diceRoll to keep track of blocks on the gameboard
    let rowNumber = diceRoll2 - 1;
    let colNumber = userProgress2[diceRoll2];
    let index2 = rowNumber * 6 + colNumber;
    setUserIndex2(index2);
    //add second user index
  };
  return (
    <div className=" md:px-32 font-extrabold bg-[url('https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80')]">
      <div className="className='flex justify-center h-screen  object-contain">
        <p className="text-3xl">
          Mission Objective: Be the FIRST to Solve THREE Rows
        </p>
        <div className="grid grid-rows-2 py-4">
          <div className="grid py-8 grid-cols-[200px_1fr]">
            <div className=" grid grid-cols-2">
              <input
                autoComplete="false"
                id="input"
                type="string"
                placeholder="Enter Player Name"
                className="w-40 font-bold flex text-center border-2 border-gray-300"
              />
            </div>
            <div className="text-2xl grid grid-cols-2">
              <p>P1 Score: {userScore}</p>
            </div>
            <div className="text-2xl ">
              <img
                width="100"
                height="100"
                src="https://cdn.pixabay.com/photo/2016/04/01/12/07/alien-1300539_1280.png"
              />
              <Button
                disabled={validationState}
                label={"Player 1 Dice"}
                onClick={handleOnClick}
              />

              <p>Row {randomNumber}</p>
            </div>

            <AlienGameBoard
              incrementUserProgress={incrementUserProgress}
              trackUserProgress={userProgress}
              score={handleUserScore}
              validate={handleValidateFunction}
              validateOtherPlayer={handleValidateFunction2}
              index={userIndex}
              blockNumber={0}
              newGame={0}
              rollDisplay={""}
              currentRoll={0}
              answer={""}
            />
          </div>

          <div className="grid py-8 grid-cols-[200px_1fr]">
            <div className="grid grid-cols-2">
              <input
                autoComplete="false"
                id="input"
                type="string"
                placeholder="Enter Player Name"
                className="w-40 font-bold flex text-center border-2 border-gray-300"
              />
            </div>
            <div className="text-2xl grid grid-cols-2">
              <p>P2 Score: {userScore2}</p>
            </div>
            <div className="text-2xl ">
              <img
                width="100"
                height="100"
                src="https://cdn.pixabay.com/photo/2016/04/01/12/07/alien-1300539_1280.png"
              />

              <Button
                disabled={validationState2}
                label={"Player 2 Dice"}
                onClick={handleOnClick2}
              />

              <p>Row {randomNumber2}</p>
            </div>

            <AlienGameBoard
              incrementUserProgress={incrementUserProgress2}
              trackUserProgress={userProgress2}
              score={handleUserScore2}
              validate={handleValidateFunction2}
              validateOtherPlayer={handleValidateFunction}
              index={userIndex2}
              blockNumber={0}
              newGame={0}
              rollDisplay={""}
              currentRoll={0}
              answer={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
