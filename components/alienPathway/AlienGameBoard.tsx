import React from "react";
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
const AlienGameBoard = () => {
  return (
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
              score={hanldeUserScore}
              validate={handleValidateFunction}
              validateOtherPlayer={handleValidateFunction2}
              index={userIndex}
              blockNumber={gridData.id}
              newGame={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlienGameBoard;