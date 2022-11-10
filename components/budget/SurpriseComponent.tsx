import { SurpriseCardType } from "../../pages/api/games/budget/surprise";
import { Button } from "../ui/Button";

export interface SurpriseComponentProps {
  close: () => void;
  surpriseData: SurpriseCardType;
}

export const SurpriseComponent = ({
  close,
  surpriseData,
}: SurpriseComponentProps) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 ">
      <div className="col-span-2 col-start-1 row-start-1 pt-4 pl-4">
        <p className="pb-5 text-4xl">Surprise!</p>
        {surpriseData && surpriseData.surpriseType} This amount will be added to
        your current total money remaining.
      </div>
      <div className="col-start-3 row-start-1 pt-5 pl-24">
        <img src="/images/BirthdayCake.png" width="80%" height="auto" />
      </div>
      <div className="col-span-2 col-start-1 row-start-2">
        <ul className="list-disc pl-9">
          <li className="pb-2 text-red-500">
            If you have a negative balance after the surprise, please change
            some values from before to balance your budget.
          </li>
          <li className="text-green-500">
            If you have a positive balance after the surprise, feel free to
            select Submit again because you successfully balanced your budget OR
            adjust some values from before to increase your total money
            remaining. Remember: the more money you have, the better!
          </li>
        </ul>
      </div>
      <div className="col-start-1 row-start-3 pt-4 pb-4 pl-4">
        <Button
          label="Close"
          onClick={close}
          backgroundColor="green"
          textColor="white"
        ></Button>
      </div>
    </div>
  );
};
