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

  // userIndex used to determine which block on the gameboard to highlight
  const [userIndex, setUserIndex] = useState(-1);

  // userScore represents rows completed
  // same as counting how many values are stored as 6 in the user object
  const [userScore, setUserScore] = useState(0);
  // sets user score to the number of values equal to 6 in userProgress Object
  // hanlder for score to prevent render loop
  const hanldeUserScore = () => {
    setUserScore(ScoreBoardFunction(userProgress));
  };
  const [validationState, setValidationState] = useState(false);
  // handler for dice button validation
  const handleValidateFunction = (bool: boolean) => {
    setValidationState(bool);
  };

  const handleOnClick = () => {
    // diceRolls is one of 1,2,3,4,5,6
    let diceRoll = getRndInteger(1, 7);
    setRandomNumber(diceRoll);
    // UserProgress tracks frequency of diceRoll to keep track of blocks on the gameboard
    userProgress[diceRoll]++;
    let rowNumber = diceRoll - 1;
    let colNumber = userProgress[diceRoll];
    let index = rowNumber * 6 + colNumber - 1;
    setUserIndex(index);
  };
  return (
    <div className="className='flex justify-center h-screen p-4 space-y-4 bg-slate-800">
      <p>{userScore}</p>
      <Button
        disabled={validationState}
        label={"Roll Dice"}
        onClick={handleOnClick}
      />{" "}
      {randomNumber}
      {/* <h1 className="text-white">Dice roll{randomNumber}</h1> */}
      <div className="grid grid-cols-6 text-2x`l text-white border-2">
        {sampleGrid.map((gridData) => (
          <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
            <BlockComponent
              score={hanldeUserScore}
              validate={handleValidateFunction}
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
  );
}
