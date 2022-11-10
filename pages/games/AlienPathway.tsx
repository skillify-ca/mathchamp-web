import { useState } from "react";
import BlockComponent from "../../components/alienPathway/Block";
import { Button } from "../../components/ui/Button";
import { getRndInteger } from "../api/random";

export default function AlienPathwayV2() {
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
  const [playerProgress, setPlayerProgress] = useState([0, 0, 0, 0, 0, 0]);

  const handleOnClick = () => {
    setRandomNumber(getRndInteger(1, 7));
  };

  // Represents Number of Dice Rolls
  let userProgressHashMap = new Map([[one, 0]]);

  let firstRow = userProgressHashMap.get(1);
  console.log(firstRow);
  if (randomNumber)
    return (
      <div className="className='flex justify-center h-screen p-4 space-y-4 bg-slate-800">
        <Button label={"Roll Dice"} onClick={handleOnClick} />
        <p className="text-white">this is the dice roll: {randomNumber}</p>
        test to track user progress
        <p>{firstRow}</p>
        <div className="grid grid-cols-7 text-2x`l text-white border-2">
          {sampleGrid.map((gridData) => (
            <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
              <BlockComponent
                index={1}
                rollDisplay={"hello"}
                currentRoll={1}
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
