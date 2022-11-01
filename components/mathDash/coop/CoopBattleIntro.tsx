import React, { useCallback, useRef, useState } from "react";
import * as Colyseus from "colyseus.js";

export interface CoopBattleIntroComponentProps {
  startGame: () => void;
}
const CoopBattleIntroComponent = ({
  startGame,
}: CoopBattleIntroComponentProps) => {
  const [time, setTime] = useState(0);
  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  React.useEffect(() => {
    // empty
  });
  let timer = function (time: number) {
    if (time / 1000.0 <= 1) {
      return <progress value={3} />;
    } else if (time / 1000.0 <= 2) {
      return <progress value={2} />;
    } else if (time / 1000.0 <= 3) {
      return <progress value={1} />;
    } else {
      startGame();
    }
  };

  return <div className="animate-fadeIn">{timer(time)}</div>;
};
export default CoopBattleIntroComponent;
