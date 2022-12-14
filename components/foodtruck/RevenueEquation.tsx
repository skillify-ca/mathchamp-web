import React from "react";
import { Food, operatingHours } from "../../pages/api/games/foodtruck/food";

export interface RevenueEquationProps {
  selectedFood: Food;
  selectedNumWorkers: string;
  revEquationOneBoxOne: string;
  revenueComponentComplete: boolean;

  setRevenueComponentComplete: (revenueComponentComplete: boolean) => void;

  setRevEquationOneBoxOne: (revEquationOneBoxOne: string) => void;
  revEquationOneBoxTwo: string;
  setRevEquationOneBoxTwo: (revEquationOneBoxTwo: string) => void;
  revEquationOneBoxThree: string;
  setRevEquationOneBoxThree: (revEquationOneBoxThree: string) => void;
  revEquationTwoBoxOne: string;
  setRevEquationTwoBoxOne: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxTwo: string;
  setRevEquationTwoBoxTwo: (revEquationTwoBoxTwo: string) => void;
  revEquationTwoBoxThree: string;
  setRevEquationTwoBoxThree: (revEquationTwoBoxThree: string) => void;
  revEquationTwoBoxFour: string;
  setRevEquationTwoBoxFour: (revEquationTwoBoxFour: string) => void;
}

const RevenueEquation = ({
  selectedFood,
  selectedNumWorkers,
  revenueComponentComplete,
  setRevenueComponentComplete,
  revEquationOneBoxOne,
  setRevEquationOneBoxOne,
  revEquationOneBoxTwo,
  setRevEquationOneBoxTwo,
  revEquationOneBoxThree,
  setRevEquationOneBoxThree,
  revEquationTwoBoxOne,
  setRevEquationTwoBoxOne,
  revEquationTwoBoxTwo,
  setRevEquationTwoBoxTwo,
  revEquationTwoBoxThree,
  setRevEquationTwoBoxThree,
  revEquationTwoBoxFour,
  setRevEquationTwoBoxFour,
}: RevenueEquationProps) => {
  // Equation 1
  const platesPerWorkerPerHour = selectedFood.qtyProducedPerWorkerHour;
  const numberOfWorkers = Number.parseInt(selectedNumWorkers);

  // Equation 1 and 2
  const platesPerHour = platesPerWorkerPerHour * numberOfWorkers;

  // Equation 2
  const pricePerPlate = selectedFood.unitRevenue;
  const hoursPerDay = operatingHours;
  const revenuePerDay = platesPerHour * pricePerPlate * hoursPerDay;

  const validateRevEquationOneBoxOne = () =>
    Number.parseInt(revEquationOneBoxOne) ===
    selectedFood.qtyProducedPerWorkerHour;

  const validateRevEquationOneBoxTwo = () =>
    Number.parseInt(revEquationOneBoxTwo) ===
    Number.parseInt(selectedNumWorkers);

  const validateQuestionOneAnswer = () =>
    Number.parseInt(revEquationOneBoxThree) ===
    platesPerWorkerPerHour * numberOfWorkers;

  const validateRevEquationTwoBoxOne = () =>
    Number.parseInt(revEquationTwoBoxOne) === platesPerHour;

  const validateRevEquationTwoBoxTwo = () =>
    Number.parseInt(revEquationTwoBoxTwo) === pricePerPlate;

  const validateRevEquationTwoBoxThree = () =>
    Number.parseInt(revEquationTwoBoxThree) === hoursPerDay;

  const validateQuestionTwoAnswer = () =>
    Number.parseInt(revEquationTwoBoxFour) === revenuePerDay;

  const validateComponent = () => {
    return validateQuestionOneAnswer() && validateQuestionTwoAnswer();
  };

  const passRevenueComponent = () => {
    setRevenueComponentComplete(validateComponent());
  };

  const equationContainerCSS = (
    inputBox: string,
    validateFunction: boolean
  ) => {
    if (inputBox.length === 0) {
      return "border-2 border-black p-4 text-grey-darkest max-w-sm";
    } else if (validateFunction) {
      return "border-8 border-green-500 p-4 text-grey-darkest max-w-sm";
    } else return "border-8 border-red-500 p-4 text-grey-darkest max-w-sm";
  };

  const progressContainerCSS = () => {
    return validateComponent()
      ? "bg-green-300 w-1/6 text-center border-2 border-black border-double p-4"
      : "bg-yellow-300 w-1/6 text-center border-2 border-black border-double p-4";
  };

  return (
    <div className="flex flex-col p-4 border-r-2 border-black border-dashed">
      <h1 className="mb-8 text-xl">
        Great Work! Will your business be a success?
      </h1>

      <div className="flex items-center mb-8 flex-cols-2 ">
        <h1 className="w-5/6 py-4 text-4xl ">
          How much money can you make every day selling {selectedFood.name}
          {selectedFood.name === "Hot Dog" ? "s" : ""}?
        </h1>
        <span className={progressContainerCSS()}>
          {validateComponent() === true ? "Correct" : "Incorrect"}
        </span>
      </div>

      <h1 className="py-8 text-3xl border-t-2 border-black border-dashed ">
        First - let's figure out how many plates of{" "}
        {selectedFood.name === "Hot Dog"
          ? selectedFood.name + "s"
          : selectedFood.name}{" "}
        you can make in an hour
      </h1>
      <h1 className="p-4 text-3xl font-bold">Equation 1:</h1>
      <div className="grid items-center justify-center grid-cols-5 py-4">
        <p className="text-3xl text-center"># Plates per Hour</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-3xl text-center"># of Workers</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-3xl text-center">Total Plates per Hour</p>
      </div>
      <div className="grid items-center justify-center grid-cols-5 py-4">
        <input
          className={equationContainerCSS(
            revEquationOneBoxOne,
            validateRevEquationOneBoxOne()
          )}
          value={revEquationOneBoxOne}
          onChange={(e) => {
            setRevEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationOneBoxTwo,
            validateRevEquationOneBoxTwo()
          )}
          value={revEquationOneBoxTwo}
          onChange={(e) => setRevEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            revEquationOneBoxThree,
            validateQuestionOneAnswer()
          )}
          value={revEquationOneBoxThree}
          onChange={(e) => setRevEquationOneBoxThree(e.target.value)}
          placeholder="2"
        />
      </div>

      <h1 className="pt-8 mt-8 text-3xl border-t-2 border-black border-dashed">
        Now - let's figure out how much money we can make in an hour
      </h1>

      <h1 className="pt-8 pl-4 text-3xl font-bold">Equation 2:</h1>
      <div className="grid items-center justify-center grid-cols-7 pt-4">
        <p className="m-4 text-3xl text-center">Total Plates per Hour</p>
        <p className="m-4 text-4xl text-center">x</p>
        <p className="m-4 text-3xl text-center">Price per Plate</p>
        <p className="m-4 text-4xl text-center">x</p>
        <p className="m-4 text-3xl text-center">Hours per Day</p>
        <p className="m-4 text-4xl text-center">=</p>
        <p className="m-4 text-3xl text-center">Revenue per Day</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxOne,
            validateRevEquationTwoBoxOne()
          )}
          value={revEquationTwoBoxOne}
          onChange={(e) => {
            setRevEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxTwo,
            validateRevEquationTwoBoxTwo()
          )}
          value={revEquationTwoBoxTwo}
          onChange={(e) => setRevEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxThree,
            validateRevEquationTwoBoxThree()
          )}
          value={revEquationTwoBoxThree}
          onChange={(e) => setRevEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            revEquationTwoBoxFour,
            validateQuestionTwoAnswer()
          )}
          value={revEquationTwoBoxFour}
          onChange={(e) => {
            setRevEquationTwoBoxFour(e.target.value);
            passRevenueComponent();
          }}
          placeholder="2"
        />
      </div>
    </div>
  );
};

export default RevenueEquation;
