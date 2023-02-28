import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMutation, useQuery } from "@apollo/client";
import MultiplicationBlock from "../../components/longestStreak/MultiplicationBlock";
import Rules from "../../components/longestStreak/Rules";
import UserTableStats from "../../components/longestStreak/userTableStats";
import Winner from "../../components/longestStreak/Winner";
import { Button } from "../../components/ui/Button";
import {
  longestStreakSelector,
  handlePlayerSelect,
  initializeGame,
  setStage,
  STAGE,
  reset,
} from "../../redux/longestStreak/longestStreakSlice";

import { DOWNGRADE_GAME_LEVEL } from "../../graphql/longestStreak/downGradeGameLevel";
import {
  FetchGameLevelResponse,
  FETCH_GAME_LEVEL,
} from "../../graphql/longestStreak/fetchGameLevel";
import { RESET_GAME_LEVEL } from "../../graphql/longestStreak/resetGameLevel";
import { UPDATE_GAME_LEVEL } from "../../graphql/longestStreak/updateGameLevel";
import { UPSERT_GAME_LEVEL } from "../../graphql/longestStreak/upsertGameLevel";

import { useAuth } from "../../lib/authContext";
import { calculatePlayerScore, calculateWin } from "../api/games/longestStreak";
import GameHUD from "../../components/longestStreak/GameHUD";

export type LongestStreakGameProps = {
  user: any;
};

export default function LongestStreakGame() {
  const dispatch = useDispatch();
  const { stage, blocks: gameState } = useSelector(longestStreakSelector);

  function handleSelect(index) {
    dispatch(handlePlayerSelect(index));
  }

  const { user } = useAuth();
  const [upsertGameLevel] = useMutation(UPSERT_GAME_LEVEL);
  const [updateGameLevel] = useMutation(UPDATE_GAME_LEVEL);
  const [downGradeGameLevel] = useMutation(DOWNGRADE_GAME_LEVEL);
  const [resetGameLevel] = useMutation(RESET_GAME_LEVEL);

  const { data } = useQuery<FetchGameLevelResponse>(FETCH_GAME_LEVEL, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data: FetchGameLevelResponse) => {
      if (data.longestStreakUserData[0] !== undefined) {
        dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
      } else {
        upsertGameLevel({
          variables: {
            userId: user.uid,
          },
        });
      }
    },
  });

  function handleResetGameLevel() {
    resetGameLevel({
      variables: {
        userId: user.uid,
      },
      refetchQueries: [
        {
          query: FETCH_GAME_LEVEL,
          variables: {
            userId: user.uid,
          },
        },
      ],
    });
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
  }

  function handlePlayGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  function handleResetGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(reset(data.longestStreakUserData[0].currentLevel));
    dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
  }

  function handlePlayAgain() {
    if (
      calculatePlayerScore(gameState, 1) > calculatePlayerScore(gameState, 2)
    ) {
      updateGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [
          {
            query: FETCH_GAME_LEVEL,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    } else {
      downGradeGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [
          {
            query: FETCH_GAME_LEVEL,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    }
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  return (
    <div className="w-full">
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="w-[30rem] md:w-full">
          <div className="flex w-full p-4 text-xl font-bold">
            <p className="w-full text-center">
              Welcome, {user.displayName}. Your quest is to battle the computer.
              Let's see how you do!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              {gameState.slice(0, 12).map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index)}
                  blockState={item.state}
                />
              ))}
            </div>
            <div className="grid grid-cols-12 w-[30rem] md:w-[60rem]">
              <div className="flex flex-col">
                {gameState
                  .slice(32, 40)
                  .map((item, index) => (
                    <MultiplicationBlock
                      text={item.text}
                      onClick={() => handleSelect(index + 32)}
                      blockState={item.state}
                    />
                  ))
                  .reverse()}
              </div>
              <div className="col-span-10">
                <GameHUD data={data} gameState={gameState} user={user} />
              </div>
              <div className="flex flex-col">
                {gameState.slice(12, 20).map((item, index) => (
                  <MultiplicationBlock
                    text={item.text}
                    onClick={() => handleSelect(index + 12)}
                    blockState={item.state}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              {gameState
                .slice(20, 32)
                .map((item, index) => (
                  <MultiplicationBlock
                    text={item.text}
                    onClick={() => handleSelect(index + 20)}
                    blockState={item.state}
                  />
                ))
                .reverse()}
            </div>
          </div>
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <Winner
          text={""}
          onClick={handlePlayAgain}
          onRestartClick={handleResetGameLevel}
          onSameLevelClick={handleResetGame}
          endOfGame={calculateWin(gameState)}
        />
      ) : stage === STAGE.SHOW_STATS ? (
        <UserTableStats onClick={handlePlayGame} />
      ) : null}
    </div>
  );
}
