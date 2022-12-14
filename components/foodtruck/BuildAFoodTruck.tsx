import React, { ReactNode } from "react";

export interface BuildAFoodTruckProps {
  userName: string;
  setUserName: (userName: string) => void;
  truckName: string;
  setTruckName: (truckName: string) => void;
  truckSlogan: string;
  setTruckSlogan: (truckSlogan: string) => void;
  dollarAmount: string;
  setDollarAmount: (dollarAmount: string) => void;
}

const BuildAFoodTruck = ({
  userName,
  setUserName,
  truckName,
  setTruckName,
  truckSlogan,
  setTruckSlogan,
  dollarAmount,
  setDollarAmount,
}: BuildAFoodTruckProps) => {
  return (
    <div className="flex flex-col p-4 border-2 border-black border-dashed">
      <h1 className="py-4 text-4xl text-black bold">
        Let's answer a few questions to get started!
      </h1>

      <label className="pb-4">1) What is your name?</label>
      <input
        className="max-w-sm p-4 border-2 border-black text-grey-darkest"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="ex: Raveen"
      />
      <label className="py-4">
        2) What do you want to call your food truck?
      </label>

      <input
        className="max-w-sm p-4 border-2 border-black text-grey-darkest"
        value={truckName}
        onChange={(e) => setTruckName(e.target.value)}
        placeholder="ex: Raveen's Tikka Truck"
      />

      <label className="py-4">3) What's your food truck's slogan?</label>
      <input
        className="max-w-sm p-4 border-2 border-black text-grey-darkest"
        value={truckSlogan}
        onChange={(e) => setTruckSlogan(e.target.value)}
        placeholder="ex: Best Tikka This Side of the Mississippi"
      />

      <label className="py-4">4) How much money did you save?</label>
      <input
        className="max-w-sm p-4 border-2 border-black text-grey-darkest"
        value={dollarAmount}
        onChange={(e) => setDollarAmount(e.target.value)}
        placeholder="ex: 1000"
      />
    </div>
  );
};

export default BuildAFoodTruck;
