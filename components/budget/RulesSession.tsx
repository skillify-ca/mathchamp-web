import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";
import { FinanceProfileChart } from "./FinanceProfileChart";
import { getRndInteger } from "../../pages/api/random";
import {
  FinanceProfileType,
  financialProfileData,
} from "../../pages/api/games/budget/profile";

export interface RulesSessionProps {
  onClick: () => void;
  profileData: FinanceProfileType;
  setProfileData: (profileData: FinanceProfileType) => void;
}

export const RulesSession = ({
  onClick,
  profileData,
  setProfileData,
}: RulesSessionProps) => {
  const randomize = () => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  };

  return (
    <div>
      <p className="pb-8 text-4xl text-center">Balancing a Budget</p>
      <div className="pb-8">
        <BudgetRules />
      </div>
      <p className="pb-5 text-center">
        Choose a profile to begin your journey:
      </p>
      {profileData && (
        <div className="flex justify-center pb-6">
          <FinanceProfileChart
            individualOccupation={profileData.individualOccupation}
            individualSalary={profileData.individualSalary}
            maritalStatus={profileData.maritalStatus}
            numberOfChildren={profileData.numberOfChildren}
            spouseOccupation={profileData.spouseOccupation}
            spouseSalary={profileData.spouseSalary}
          />
        </div>
      )}
      <div></div>
      <div className="flex justify-center flex-nowrap">
        <div className="pr-5">
          <Button
            backgroundColor="green"
            textColor="white"
            label="Randomize"
            onClick={randomize}
          />
        </div>
        <div>
          <Button
            backgroundColor="green"
            textColor="white"
            label="Start"
            onClick={(e) => onClick()}
          />
        </div>
      </div>
    </div>
  );
};
