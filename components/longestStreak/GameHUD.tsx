import { useDispatch } from "react-redux";
import {
  checkNumberNotSelected,
  calculatePlayerScore,
} from "../../pages/api/games/longestStreak";
import {
  setStage,
  STAGE,
  reset,
  initializeGame,
} from "../../redux/longestStreakSlice";
import { Button } from "../ui/Button";

export default function GameHUD({ data, gameState, user }) {
  const dispatch = useDispatch();

  function handleCalculateWinner() {
    dispatch(setStage(STAGE.CALCULATE_WINNER));
  }

  function handleShowStats() {
    dispatch(setStage(STAGE.SHOW_STATS));
  }

  function handleResetGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(reset(data.longestStreakUserData[0].currentLevel));
    dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
  }

  return (
    <div className="w-full bg-gradient-to-r h-full from-red-400 ...">
      <div className="flex flex-col justify-around h-full">
        <div className="flex justify-center p-1 font-bold text-md md:p-5 md:text-xl">
          Current Game Level:
          {data && (
            <span className="font-bold">
              {" "}
              {/* {data.longestStreakUserData[0].currentLevel} */}
            </span>
          )}
        </div>
        <div className="flex justify-center">
          Number of Open Blocks: {"  "}
          <span className="font-bold">{checkNumberNotSelected(gameState)}</span>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 place-items-center">
          <div className="text-center">
            {user.Displayname ? true : "Player 1"} Score:{" "}
            <span className="font-bold text-center">
              {calculatePlayerScore(gameState, 1)}
            </span>
          </div>
          <div className="text-center ">
            Computer Score:{" "}
            <span className="font-bold text-center ">
              {calculatePlayerScore(gameState, 2)}
            </span>
          </div>
          <Button
            backgroundColor="purple"
            label={"Rules"}
            onClick={() => dispatch(setStage(STAGE.SET_RULES))}
          />
          <Button
            backgroundColor="purple"
            label={"Reset"}
            onClick={() => handleResetGame()}
          />
          <Button
            backgroundColor="purple"
            label={"Winner"}
            onClick={handleCalculateWinner}
          />
          <Button
            backgroundColor="purple"
            label={"Stats"}
            onClick={handleShowStats}
          />
        </div>
      </div>
    </div>
  );
}
