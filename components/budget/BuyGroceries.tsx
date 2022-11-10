import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";
import { GroceryTable } from "./BuyAHomeTables";
export interface BuyGroceriesProps {}

export const BuyGroceries = ({}: BuyGroceriesProps) => {
  return (
    <div className={"mr-24"}>
      <ServiceHeader
        mainHeader="Buy Groceries"
        imgHeader="/images/budget/groceries.png"
        subHeader=" Use the chart to determine how much food will cost for each person in your family, including children. Your expenses go in section 5 of your recording sheet.
"
      />

      <div className="flex flex-wrap justify-center border-t-8 border-black ">
        <div className="py-4 pr-40 mt-10 text-4xl text-left"> Groceries</div>
        <img
          className="justify-center w-2/12 mt-10 h-1/6"
          src="/images/budget/grocerybag.png"
        />
        <div className="flex flex-wrap justify-center p-3 gap-x-4 gap-y-4">
          <GroceryTable />
        </div>
      </div>
    </div>
  );
};
