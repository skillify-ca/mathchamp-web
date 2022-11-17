import { from } from "@apollo/client";
import { useEffect, useState } from "react";
import BlockComponent from "../../components/alienPathway/Block";
import { Button } from "../../components/ui/Button";
import { getRndInteger } from "../api/random";

interface UserProgress {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
}
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

const generateScore = (userProgress: UserProgress) => {
  let score = 0;
  for (let index = 1; index < 7; index++) {
    if (userProgress[index] == 6) {
      score += 1;
    }
  }
  return score;
};

export default function AlienPathwayV2() {
  // randomNumber represents the roll of the die
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);

  // userIndex used to determine which block on the gameboard to highlight
  const [userIndex, setUserIndex] = useState(-1);
  const [userIndex2, setUserIndex2] = useState(-1);

  // userScore represents rows completed
  // same as counting how many values are stored as 6 in the user object
  const [userScore, setUserScore] = useState(0);
  const [userScore2, setUserScore2] = useState(0);
  // sets user score to the number of values equal to 6 in userProgress Object
  // hanlder for score to prevent render loop
  const [validationState, setValidationState] = useState(false);
  const [validationState2, setValidationState2] = useState(true);

  function checkForWinner() {
    if (userScore == 3) {
      alert("You Won!");
    }
  }
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
  const hanldeUserScore = () => {
    setUserScore(generateScore(userProgress));
  };
  const hanldeUserScore2 = () => {
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
    checkForWinner();
  }, [userScore, userScore2]);

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
    //add second user index
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
    <div className=" md:px-64 font-extrabold bg-[url('https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80')]">
      <div className="className='flex justify-center h-screen  object-contain">
        <p className="text-3xl">
          Mission Objective: Be the FIRST to Solve THREE Rows
        </p>
        <div className="grid grid-rows-2 py-4">
          <div className="grid py-8 grid-cols-[300px_1fr]">
            <div className=" grid grid-cols-2">
              <input
                autoComplete="false"
                id="input"
                type="string"
                placeholder="Enter Player Name"
                className="w-64 font-bold flex text-center border-2 border-gray-300"
              ></input>
            </div>
            <div className="text-2xl grid grid-cols-2">
              <p>P1 Score: {userScore}</p>
            </div>
            <div className="text-2xl ">
              <img
                width="100"
                height="100"
                src="https://cdn.pixabay.com/photo/2016/04/01/12/07/alien-1300539_1280.png"
              ></img>
              <Button
                disabled={validationState}
                label={"Player 1 Dice"}
                onClick={handleOnClick}
              />

              <p>Row {randomNumber}</p>
            </div>

            <div className="grid grid-cols-[50px_1fr]">
              <div className="font-thin grid grid-rows-6">
                <p>Row 1</p>
                <p>Row 2</p>
                <p>Row 3</p>
                <p>Row 4</p>
                <p>Row 5</p>
                <p>Row 6</p>
              </div>
              <div className="font-thin grid grid-cols-6 text-lg text-white border-2">
                {sampleGrid.map((gridData) => (
                  <div className="h-8 border-t-2 md:h-8 sm:h-8">
                    <BlockComponent
                      incrementUserProgress={incrementUserProgress}
                      trackUserProgress={userProgress}
                      score={hanldeUserScore}
                      validate={handleValidateFunction}
                      validateOtherPlayer={handleValidateFunction2}
                      index={userIndex}
                      rollDisplay={"hello"}
                      currentRoll={0}
                      blockNumber={gridData.id}
                      newGame={0}
                      answer={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid py-8 grid-cols-[300px_1fr]">
            <div className="grid grid-cols-2">
              <input
                autoComplete="false"
                id="input"
                type="string"
                placeholder="Enter Player Name"
                className="w-64 font-bold flex text-center border-2 border-gray-300"
              ></input>
            </div>
            <div className="text-2xl grid grid-cols-2">
              <p>P2 Score: {userScore2}</p>
            </div>
            <div className="text-2xl ">
              <img
                width="100"
                height="100"
                src="https://cdn.pixabay.com/photo/2016/04/01/12/07/alien-1300539_1280.png"
              ></img>

              <Button
                disabled={validationState2}
                label={"Player 2 Dice"}
                onClick={handleOnClick2}
              />

              <p>Row {randomNumber2}</p>
            </div>
            <div className="grid grid-cols-[50px_1fr]">
              <div className="font-thin grid grid-rows-6">
                <p>Row 1</p>
                <p>Row 2</p>
                <p>Row 3</p>
                <p>Row 4</p>
                <p>Row 5</p>
                <p>Row 6</p>
              </div>
              <div className="font-thin grid grid-cols-6 text-xl text-teal-200 border-2">
                {sampleGrid.map((gridData) => (
                  <div className="h-8 border-t-2 min-w-64">
                    <BlockComponent
                      incrementUserProgress={incrementUserProgress2}
                      trackUserProgress={userProgress2}
                      score={hanldeUserScore2}
                      validate={handleValidateFunction2}
                      validateOtherPlayer={handleValidateFunction}
                      index={userIndex2}
                      rollDisplay={"hello"}
                      currentRoll={0}
                      blockNumber={gridData.id}
                      newGame={0}
                      answer={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
