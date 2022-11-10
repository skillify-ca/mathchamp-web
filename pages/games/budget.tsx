import _, { min } from "lodash";
import React, { useEffect, useState } from "react";
import AssignmentSession from "../../components/budget/AssignmentSession";
import { EndSession } from "../../components/budget/EndSession";
import { RulesSession } from "../../components/budget/RulesSession";

import {
  FinanceProfileType,
  financialProfileData,
} from "../api/games/budget/profile";
import { getRndInteger } from "../api/random";

enum STAGES {
  START,
  ASSIGNMENT,
  END,
}

const FinanceProfile = () => {
  const [profileData, setProfileData] = useState<FinanceProfileType>();

  useEffect(() => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const [stage, setStage] = useState(STAGES.START);

  const routeAssignment = () => {
    setStage(STAGES.ASSIGNMENT);
  };
  const routeEnd = () => {
    setStage(STAGES.END);
  };
  const routeStart = () => {
    setStage(STAGES.START);
  };

  return (
    <div>
      {stage === STAGES.START && (
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={routeAssignment}
        />
      )}
      {stage === STAGES.ASSIGNMENT && (
        <AssignmentSession profileData={profileData} onClick={routeEnd} />
      )}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

export default FinanceProfile;
