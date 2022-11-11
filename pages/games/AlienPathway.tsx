import { useState } from "react";
import BlockComponent from "../../components/alienPathway/Block";
import { Button } from "../../components/ui/Button";
import { getRndInteger } from "../api/random";

let userProgress = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

export default function AlienPathwayV2() {
  // For gameboard component, creates gameboard ID's from 1 to 42
  function createGrid() {
    let gridList = [];
    for (let i = 0; i < 42; i++) {
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

  const [validationState, setValidationState] = useState(false);
  const validateFunction = () => {
    setValidationState(false);
  };
  const invalidateFunction = () => {
    setValidationState(true);
  };

  const handleOnClick = () => {
    // diceRolls is one of 1,2,3,4,5,6
    let diceRoll = getRndInteger(1, 7);
    setRandomNumber(diceRoll);
    // UserProgress tracks frequency of diceRoll to keep track of blocks on the gameboard
    userProgress[diceRoll]++;
    let rowNumber = diceRoll - 1;
    let colNumber = userProgress[diceRoll];
    let index = rowNumber * 7 + colNumber - 1;
    setUserIndex(index);
  };

  return (
    <div className="className='flex justify-center h-screen p-4 space-y-4 bg-slate-800">
      {/* We want button to be enabled only when the game starts or if the current block is validated */}
      <Button
        disabled={validationState}
        label={"Roll Dice"}
        onClick={handleOnClick}
      />{" "}
      {randomNumber}
      {/* <h1 className="text-white">Dice roll{randomNumber}</h1> */}
      <div className="grid grid-cols-7 text-2x`l text-white border-2">
        {sampleGrid.map((gridData) => (
          <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
            <BlockComponent
              invalidate={invalidateFunction}
              validate={validateFunction}
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
