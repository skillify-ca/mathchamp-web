import { ReactNode, useEffect } from "react";

import {
  MaritalStatus,
  FinanceProfileType,
  financialProfileData,
} from "../../pages/api/games/budget/profile";
import { SingleQuestionInput } from "./questions/SingleQuestionInput";
import { TrueFalse } from "./questions/TrueFalseInput";

export interface SectionOneInputProps {
  isMarried: MaritalStatus;
  setMarriage: (setMarriage: MaritalStatus) => void;
  hasChildren: boolean;
  setChildren: (hasChildren: boolean) => void;
  individualOccupation: string;
  setIndividualOccupation: (individualOccupation: string) => void;
  individualSalary: number;
  setIndividualSalary: (individualSalary: number) => void;
  spouseOccupation: string;
  setSpouseOccupation: (spouseOccupation: string) => void;
  spouseSalary: number;
  setSpouseSalary: (spouseSalary: number) => void;
  profileData: FinanceProfileType;
  sectionOneValidation: boolean;
  setSectionOneValidation: (sectionOneValidation: boolean) => void;
}

export const SectionOneInput = ({
  isMarried,
  setMarriage,
  hasChildren,
  setChildren,
  individualOccupation,
  setIndividualOccupation,
  individualSalary,
  setIndividualSalary,
  spouseOccupation,
  setSpouseOccupation,
  spouseSalary,
  setSpouseSalary,
  profileData,
  sectionOneValidation,
  setSectionOneValidation,
}: SectionOneInputProps) => {
  useEffect(() => {
    if (profileData) {
      setSectionOneValidation(
        isMarried == profileData.maritalStatus &&
          hasChildren == (profileData.numberOfChildren > 0 ? true : false) &&
          spouseOccupation == profileData.spouseOccupation &&
          individualOccupation == profileData.individualOccupation &&
          individualSalary == profileData.individualSalary &&
          spouseSalary == profileData.spouseSalary
          ? true
          : false
      );
    }
  }, [profileData]);
  return (
    <div>
      {profileData && (
        <div className="bg-transparent bg-white shadow-md rounded-xl">
          <div className="sticky top-0 p-4 mb-5 font-bold text-white bg-green-300 rounded-xl">
            Section 1: My Personal Information
          </div>
          <div
            className={
              "grid grid-cols-3 auto-cols-fr items-center justify-center gap-y-1 border-2 rounded-xl"
            }
          >
            <label className="flex flex-row justify-center text-center ">
              Are you married?
            </label>
            <TrueFalse
              name="children"
              option1="Yes"
              option2="No"
              value={isMarried}
              onChange={(e) =>
                setMarriage(
                  e.target.value.toLowerCase() == "yes"
                    ? MaritalStatus.MARRIED
                    : MaritalStatus.SINGLE
                )
              }
            />
            <div className="w-1/4">
              {isMarried == profileData.maritalStatus ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>
            <label className="flex justify-center text-center">
              Do you have children?
            </label>
            <TrueFalse
              name="children"
              option1="Yes"
              option2="No"
              value={hasChildren}
              onChange={(e) =>
                e.target.value.toLowerCase() == "yes" ? true : false
              }
            />
            <div className="w-1/4">
              {hasChildren ==
              (profileData.numberOfChildren > 0 ? true : false) ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>
            <label className="flex justify-center text-center ">
              What is your occupation?
            </label>
            <select
              className="w-4/6 bg-gray-100 rounded-lg"
              name="select"
              id="select"
              value={individualOccupation}
              onChange={(e) => setIndividualOccupation(e.target.value)}
            >
              {financialProfileData
                .filter((profile) => profile.individualOccupation != "")
                .map((profile) => (
                  <option value={profile.individualOccupation}>
                    {profile.individualOccupation}
                  </option>
                ))}
            </select>
            <div className="w-1/4">
              {individualOccupation == profileData.individualOccupation ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className="flex justify-center text-center ">
              What is your spouse's occupation?
            </label>
            <select
              className="w-4/6 bg-gray-100 rounded-lg"
              name="select"
              id="select"
              value={spouseOccupation}
              onChange={(e) => setSpouseOccupation(e.target.value)}
            >
              {financialProfileData
                .map((profile) => profile.spouseOccupation)
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((spouseOccupation) => (
                  <option value={spouseOccupation}>{spouseOccupation}</option>
                ))}
            </select>
            <div className="w-1/4">
              {spouseOccupation == profileData.spouseOccupation ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className="flex-row justify-center text-center ">
              How much money do you make per month?
            </label>
            <SingleQuestionInput
              type="number"
              name="salary"
              value={individualSalary}
              onChange={(e) => setIndividualSalary(e.target.value)}
            />
            <div className="w-1/4">
              {individualSalary == profileData.individualSalary ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
            <label className="flex-row justify-center text-center ">
              How much does your spouse make per month?
            </label>
            <SingleQuestionInput
              type="number"
              name="spousesalary"
              value={spouseSalary}
              onChange={(e) => setSpouseSalary(e.target.value)}
            />
            <div className="w-1/4">
              {spouseSalary == profileData.spouseSalary ? (
                <img src={"/images/budget/checked-checkbox-16.png"} />
              ) : (
                <img src={"/images/budget/gray-checked-checkbox-16.png"} />
              )}
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};
