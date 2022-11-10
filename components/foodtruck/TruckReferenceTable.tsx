import React from "react";
import { allTrucks } from "../../pages/api/foodtruck/food";

const TruckReferenceTable = () => {
  return (
    <table className="bg-white shadow-md">
      <thead>
        <tr>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Truck Type
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Monthly Cost
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Daily Cost
          </th>
          <th className="w-40 text-center bg-gray-300 border border-black">
            Allowed Items
          </th>
        </tr>

        {allTrucks.map((t) => {
          return (
            <tr>
              <td className="text-center border border-black">{t.model}</td>
              <td className="text-center border border-black">{t.fixedCost}</td>
              <td className="text-center border border-black">
                {t.variableCost}
              </td>
              <td className="text-center border border-black">
                {t.allowedItems
                  .map((f) => {
                    return f.name;
                  })
                  .join(", ")}
              </td>
            </tr>
          );
        })}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TruckReferenceTable;
