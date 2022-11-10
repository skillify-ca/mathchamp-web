import React from "react";
import { allFoods } from "../../pages/api/games/foodtruck/food";

const FoodReferenceTable = () => {
  return (
    <table className="bg-white shadow-md">
      <thead>
        <tr>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Food Type
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Food Cost
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Food Price
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Quantity per worker per hour
          </th>
        </tr>

        {allFoods.map((f) => {
          return (
            <tr>
              <td className="text-center border border-black">{f.name}</td>
              <td className="text-center border border-black">{f.unitCost}</td>
              <td className="text-center border border-black">
                {f.unitRevenue}
              </td>
              <td className="text-center border border-black">
                {f.qtyProducedPerWorkerHour}
              </td>
            </tr>
          );
        })}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default FoodReferenceTable;
