import React from "react";
import {
  Truck,
  allTrucks,
  getTruck,
} from "../../pages/api/games/foodtruck/food";

export interface ChooseTruckTypeProps {
  truck: Truck;
  setTruck: (truck: Truck) => void;
}

const ChooseTruckType = ({ truck, setTruck }: ChooseTruckTypeProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="p-4 mb-8 text-3xl text-center text-black bold">
        What kind of stand do you want to buy?
      </h1>
      <div className="grid grid-cols-5 pb-8 border-b-2 border-black border-dashed">
        <p className="col-start-2 text-xl text-center">Stand Type</p>
        <p className="col-start-3 text-xl text-center">Purchase Price</p>
        <p className="col-start-4 text-xl text-center">Daily Cost</p>
        <p className="col-start-5 text-xl text-center">Allowed Food</p>
      </div>
      {allTrucks.map((t) => {
        return (
          <label className="grid items-center grid-cols-5 p-4 text-center border-b-2 border-black border-dashed">
            <input
              className="w-6 h-6 form-radio"
              type="radio"
              value={t.model}
              checked={truck.model === t.model}
              onChange={(e) => setTruck(getTruck(e.target.value) as Truck)}
            />
            <figure>
              <img className="object-contain w-60" src={t.imageUrl} />
              <figcaption className="">{t.model}</figcaption>
            </figure>
            <span className="text-center ">${t.fixedCost}</span>
            <span className="text-center">${t.variableCost}</span>
            <ul className="text-center">
              {t.allowedItems.map((it) => (
                <li>{it.name}</li>
              ))}
            </ul>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseTruckType;
