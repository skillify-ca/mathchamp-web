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
    <div className="w-full bg-gradient-to-r h-full">
      <div className="flex flex-col justify-around text-2xl h-full">
        <div className="text-center font-bold text-4xl p-5">
          Current Game Level:
          {data && (
            <span className="font-bold">
              {" "}
              {/* {data.longestStreakUserData[0].currentLevel} */}
            </span>
          )}
        </div>
        <div className="text-center text-3xl font-semibold">
          Number of Open Blocks: {"  "}
          <span className="font-bold">{checkNumberNotSelected(gameState)}</span>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 place-items-center">
          <div className="text-center font-semibold">
            {user.Displayname ? true : "Player 1"} Score:{" "}
            <span className="font-bold text-center">
              {calculatePlayerScore(gameState, 1)}
            </span>
          </div>
          <div className="text-center font-semibold">
            Computer Score:{" "}
            <span className="font-bold text-center ">
              {calculatePlayerScore(gameState, 2)}
            </span>
          </div>
          <Button
            backgroundColor="red"
            label={"Rules"}
            onClick={() => dispatch(setStage(STAGE.SET_RULES))}
          />
          <Button
            backgroundColor="red"
            label={"Reset"}
            onClick={() => handleResetGame()}
          />
          <Button
            backgroundColor="red"
            label={"Winner"}
            onClick={handleCalculateWinner}
          />
          <Button
            backgroundColor="red"
            label={"Stats"}
            onClick={handleShowStats}
          />
        </div>
      </div>
    </div>
  );
}
