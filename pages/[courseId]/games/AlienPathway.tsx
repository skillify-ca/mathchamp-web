import React, { FC, useState, useEffect } from "react";
import BlockComponent from "../../../components/alienPathway/Block";
import DiceButtonComponent from "../../../components/alienPathway/DiceButton";

import { Button } from "../../../components/ui/Button";
import { GuessData } from "../../api/guessData";
import { getRandomItemFromArray } from "../../api/random";

type diceOutput = {
  diceNumber: number;
  diceDisplay: string;
};

const diceRoll = () => {
  const diceDisp = getRandomItemFromArray([
    "⚀ 1 ⚀",
    "⚁ 2 ⚁",
    "⚂ 3 ⚂",
    "⚃ 4 ⚃",
    "⚄ 5 ⚄",
    "⚅ 6 ⚅",
  ]);
  const diceNumb = parseInt(diceDisp.substring(2, 3));
  const diceOutp: diceOutput = {
    diceNumber: diceNumb,
    diceDisplay: diceDisp,
  };
  return diceOutp;
};

export interface IndexProps {
  submitGuess: (guess: GuessData) => void;
  answer: string;
}

const Index: FC<IndexProps> = ({ submitGuess, answer }) => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);
  const [roll1Display, setRoll1Display] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll2Display, setRoll2Display] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll1Number, setRoll1Number] = useState(0);
  const [roll2Number, setRoll2Number] = useState(0);
  const [indexNumber1, setIndexNumber1] = useState(0);
  const [indexNumber2, setIndexNumber2] = useState(0);

  const handleDiceRoll1 = () => {
    const player1Dice = diceRoll();
    setRoll1Display(player1Dice.diceDisplay);
    setRoll1Number(player1Dice.diceNumber);
  };

  const handleDiceRoll2 = () => {
    const player2Dice = diceRoll();
    setRoll2Display(player2Dice.diceDisplay);
    setRoll2Number(player2Dice.diceNumber);
  };
  function createGrid() {
    let gridList = [];
    for (let i = 0; i < 42; i++) {
      gridList.push({
        id: i,
      });
    }
    return gridList;
  }
  useEffect(() => {
    let counter1 = (roll1Number - 1) * 7;
    setIndexNumber1(counter1);
    let counter2 = (roll2Number - 1) * 7;
    setIndexNumber2(counter2);
    console.log("index1", indexNumber1);
    console.log("index2", indexNumber2);
  });
  useEffect(() => {
    setGrid(createGrid);
  }, [newGame]);
  const newGameButton = () => {
    setNewGame(newGame + 1);
  };

  console.log("roll number1", roll1Number);
  console.log("roll number2", roll2Number);
  return (
    <div className="bg-slate-800">
      <Button label="New Game" onClick={() => newGameButton()}></Button>
      <div className="grid grid-cols-2 place-content-center">
        <DiceButtonComponent
          rollDisplay={roll1Display}
          rollNumber={roll1Number}
          handleDiceRoll={handleDiceRoll1}
        />
        <DiceButtonComponent
          rollDisplay={roll2Display}
          rollNumber={roll2Number}
          handleDiceRoll={handleDiceRoll2}
        />
      </div>
      <div className="grid grid-rows-2 gap-8 px-20 pb-10">
        <div className="grid grid-cols-7 text-2xl text-white border-2">
          {grid.map((gridData) => (
            <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
              <BlockComponent
                index={indexNumber1}
                rollDisplay={roll1Display}
                currentRoll={roll1Number}
                blockNumber={gridData.id}
                newGame={0}
                answer={""}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-2xl text-white border-2">
          {grid.map((gridData) => (
            <div className="h-8 border-b-2 border-r-2 md:h-8 sm:h-8">
              <BlockComponent
                rollDisplay={roll2Display}
                index={indexNumber2}
                currentRoll={roll2Number}
                blockNumber={gridData.id}
                newGame={0}
                answer={""}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
