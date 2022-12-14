import React, { ReactNode } from "react";

export interface ChooseNumWorkersProps {
  selectedNumWorkers: string;
  setSelectedNumWorkers: (selectedNumWorkers: string) => void;
}

const ChooseNumWorkers = ({
  selectedNumWorkers,
  setSelectedNumWorkers,
}: ChooseNumWorkersProps) => {
  const numWorkerArray = ["1", "2", "3", "4"];

  const renderWorkerImagesHTML = (n: string) => {
    return [...Array(Number.parseInt(n))].map((_, i) => (
      <div className="flex flex-cols" key={i}>
        <img
          className="object-contain w-full h-full px-12"
          src="/images/foodtruck/chef.png"
        />
      </div>
    ));
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="p-4 text-3xl text-black bold">
        How many workers do you want to employ?
      </h1>

      {numWorkerArray.map((n) => {
        return (
          <label className="flex flex-row items-center p-4 space-x-8 space-y-12">
            <input
              className="w-8 h-8 form-radio"
              type="radio"
              value={n.toString()}
              checked={selectedNumWorkers === n.toString()}
              onChange={(e) => setSelectedNumWorkers(e.target.value)}
            />
            <div className="flex flex-row h-24">
              {renderWorkerImagesHTML(n)}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default ChooseNumWorkers;
