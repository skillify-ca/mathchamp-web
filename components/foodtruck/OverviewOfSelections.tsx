import React from "react";
import { Truck, Food, minimumWage } from "../../pages/api/games/foodtruck/food";
export interface OverviewOfSelectionsProps {
  selectedTruck: Truck;
  selectedFood: Food;
  selectedNumWorkers: string;
  setSelectedNumWorkers: (selectedNumWorkers: string) => void;
}

const OverviewOfSelections = ({
  selectedTruck,
  selectedFood,
  selectedNumWorkers,
  setSelectedNumWorkers,
}: OverviewOfSelectionsProps) => {
  const dailyWage = minimumWage * parseInt(selectedNumWorkers) * 8;
  const monthlyWage = minimumWage * parseInt(selectedNumWorkers) * 8 * 5 * 4;
  return (
    <div className="flex flex-col p-4 border-2 border-black border-dashed">
      <h1 className="text-4xl text-black bold">Overview of your Selections</h1>
      <div className="grid items-center grid-cols-3 p-4">
        <p className="text-lg font-bold">Truck Type: </p>
        <figure>
          <img
            className="object-contain h-48 px-8 w-60"
            src={selectedTruck.imageUrl}
          />
          <figcaption className="text-justify">
            {selectedTruck.model}
          </figcaption>
        </figure>
        <p className="text-lg">
          This will cost you ${selectedTruck.fixedCost} per month to rent. It
          will also cost ${selectedTruck.variableCost} per day to operate{" "}
        </p>
        <p className="text-lg font-bold">Truck Type: </p>
        <figure>
          <img
            className="object-contain h-48 px-8 w-60"
            src={selectedFood.imageUrl}
          />
          <figcaption className="text-justify">{selectedFood.name}</figcaption>
        </figure>
        <p className="text-lg">
          You will sell each {selectedFood.name} for ${selectedFood.unitRevenue}
          . Each {selectedFood.name} will cost ${selectedFood.unitCost} per
          plate
        </p>
        <p className="text-lg font-bold">Number of Workers:</p>
        <figure>
          <img
            className="object-contain h-48 px-8 w-60"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
          />
          <figcaption className="text-justify">{selectedNumWorkers}</figcaption>
        </figure>
        <p className="text-lg">
          You will employ {selectedNumWorkers}{" "}
          {selectedNumWorkers === "1" ? "worker" : "workers"} at your stand.
          This will cost ${dailyWage} per day and ${monthlyWage} per month
        </p>
      </div>
    </div>
  );
};

export default OverviewOfSelections;
