import { useState } from "react";
import BlockComponent from "../../components/alienPathway/Block";
import { Button } from "../../components/ui/Button";
import { getRndInteger } from "../api/random";
let userProgressList = [
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
];
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

  const [randomNumber, setRandomNumber] = useState(0);
  const [userIndex, setUserIndex] = useState(-1);

  const handleOnClick = () => {
    let diceRoll = getRndInteger(1, 7);
    setRandomNumber(diceRoll);
    for (let index = 0; index < userProgressList.length; index++) {
      // mutate the value of the progress list, based on the diceroll
      if (diceRoll == userProgressList[index][0]) {
        userProgressList[index][1] += 1;
      }
      console.log(userProgressList[index]);
    }
    // define row and column number for readability
    let rowNumber = diceRoll - 1;
    let colNumber = userProgressList[diceRoll - 1];
    let index = rowNumber * 7 + colNumber[1] - 1;
    setUserIndex(index);
    console.log(index);
  };

  // let firstRow = userProgressHashMap.get(1);
  // console.log(firstRow);
  return (
    <div className="className='flex justify-center h-screen p-4 space-y-4 bg-slate-800">
      <Button label={"Roll Dice"} onClick={handleOnClick} />
      <p className="text-white">this is the dice roll: {randomNumber}</p>
      test to track user progress
      <div className="grid grid-cols-7 text-2x`l text-white border-2">
        {sampleGrid.map((gridData) => (
          <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
            <BlockComponent
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
