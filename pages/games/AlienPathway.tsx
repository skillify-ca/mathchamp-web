import { useState } from "react";
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

// Refactor this code to iterate through userobject instead of checking line by line
const ScoreBoardFunction = (UserObject: UserProgress) => {
  // this resets the score to zero over and over
  let score = 0;
  if (UserObject[1] == 6) {
    score += 1;
  }
  if (UserObject[2] == 6) {
    score += 1;
  }
  if (UserObject[3] == 6) {
    score += 1;
  }
  if (UserObject[4] == 6) {
    score += 1;
  }
  if (UserObject[5] == 6) {
    score += 1;
  }
  if (UserObject[6] == 6) {
    score += 1;
  }
  return score;
};

export default function AlienPathwayV2() {
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

  const hanldeUserScore = () => {
    setUserScore(ScoreBoardFunction(userProgress));
  };
  const hanldeUserScore2 = () => {
    setUserScore2(ScoreBoardFunction(userProgress2));
  };
  // handler for dice button validation
  const handleValidateFunction = (bool: boolean) => {
    setValidationState(bool);
  };
  const handleValidateFunction2 = (bool: boolean) => {
    setValidationState2(bool);
  };
  // check for winner
  checkForWinner();
  const handleOnClick = () => {
    // diceRolls is one of 1,2,3,4,5,6
    let diceRoll = getRndInteger(1, 7);
    setRandomNumber(diceRoll);
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
    // UserProgress tracks frequency of diceRoll to keep track of blocks on the gameboard
    let rowNumber = diceRoll2 - 1;
    let colNumber = userProgress2[diceRoll2];
    let index2 = rowNumber * 6 + colNumber;
    setUserIndex2(index2);
    //add second user index
  };
  return (
    <div className="className='flex justify-center h-screen p-4 space-y-4 bg-slate-800">
      <p>Player 1 Score is {userScore}</p>
      <p>Player 2 Score is {userScore2}</p>
      <div className="flex space-x-16">
        <Button
          disabled={validationState}
          label={"Player 1 Dice"}
          onClick={handleOnClick}
        />
        <p>{randomNumber}</p>
        <Button
          disabled={validationState2}
          label={"Player 2 Dice"}
          onClick={handleOnClick2}
        />
        <p>{randomNumber2}</p>
      </div>

      {/* <h1 className="text-white">Dice roll{randomNumber}</h1> */}
      <div className="grid grid-cols-6 text-2x`l text-white border-2">
        {sampleGrid.map((gridData) => (
          <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
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
      <div className="grid grid-cols-6 text-2x`l text-white border-2">
        {sampleGrid.map((gridData) => (
          <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
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
  );
}
