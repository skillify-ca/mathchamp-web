import React, { useEffect, useState } from "react";
import * as Colyseus from "colyseus.js";
import BattleComponent from "../../../components/mathDash/BattleComponent";
import CoopBattleComponent from "../../../components/mathDash/coop/CoopBattleComponent";
import CoopGameOver from "../../../components/mathDash/coop/CoopGameOver";
import CreateRoom from "../../../components/mathDash/CreateRooms";
import Lobby from "../../../components/mathDash/PlayerLobby";
import PostGameLobby from "../../../components/mathDash/PostGameLobby";
import { Question } from "../../api/question";
import { generateMathQuestions } from "../../api/questionGenerators";
import { QuestionType } from "../../api/questionTypes";

export type Player = {
  seat: number;
  score: number;
  sessionId: string;
  name: string;
  finished: boolean;
};
export enum STAGE {
  CREATE_JOIN_GAME,
  LOBBY,
  BATTLE,
  COOP,
  POSTGAME_LOBBY,
  GAME_OVER,
  COOP_GAME_OVER,
  PLAY_GAME,
}

const MathBattle = () => {
  const [players, setPlayers] = useState([]);

  const [leader, setLeader] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState(STAGE.CREATE_JOIN_GAME);
  const [room, setRoom] = useState<Colyseus.Room>();
  const [battleName, setBattleName] = useState("");
  const [coopName, setCoopName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [code, setCode] = useState("");
  const [winnerId, setWinnerId] = useState("");

  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      questionType: QuestionType.HORIZONTAL_EQUATION,
      operator: "+",
    },
  ]);

  var client = new Colyseus.Client("wss://math-game-server.herokuapp.com");
  const onJoinClick = () => {
    client
      .joinById(code)
      .then((room) => {
        setRoom(room);
        room.send("join", { name: joinName }); //Dyanmic Name
        setStage(STAGE.LOBBY);
      })
      .catch((e) => {
        console.log("JOIN ERROR", e);
      });
  };

  const onCreateCoopClick = () => {
    setStage(STAGE.LOBBY);
    setIsLoading(true);

    client
      .create("coop")
      .then((room) => {
        setCode(room.id);
        console.log(room.sessionId, "joined", room.id, room.name);
        setRoom(room);
        room.send("join", { name: coopName }); //Dyanmic Name
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log("JOIN ERROR", e);
      });
  };
  const onCreateClick = () => {
    setStage(STAGE.LOBBY);
    setIsLoading(true);

    client
      .create("battle")
      .then((room) => {
        setLeader(room.sessionId);
        setCode(room.id);
        console.log(room.sessionId, "joined", room.name);
        setRoom(room);
        room.send("join", { id: room.sessionId, name: battleName }); //Dyanmic Name
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log("JOIN ERROR", e);
      });
  };
  room?.onMessage("joinResponse", (message) => {
    let playerArr = [];
    for (const [key, value] of Object.entries(message.players)) {
      console.log(key, value);
      playerArr.push(value);
    }

    setPlayers(playerArr);
    setLeader(message.leader);
  });

  room?.onMessage("postGame", (message) => {
    let playerArr = [];
    for (const [key, value] of Object.entries(message)) {
      playerArr.push(value);
    }
    setPlayers(playerArr);
    setStage(STAGE.POSTGAME_LOBBY);
  });

  room?.onMessage("goToBattle", (message) => {
    setStage(STAGE.BATTLE);
    const questions = message.battleQuestions;
    setQuestionData(questions);
  });
  room?.onMessage("goToCoop", (message) => {
    setStage(STAGE.COOP);
  });
  room?.onMessage("showGameOver", (message) => {
    // There is no message for coop
    if (message) {
      setWinnerId(message.id);
    }

    if (stage === STAGE.BATTLE) {
      setStage(STAGE.POSTGAME_LOBBY);
    } else if (stage === STAGE.COOP) {
      setStage(STAGE.COOP_GAME_OVER);
    }
  });

  const onStartGameRequested = () => {
    const questions: Question[] = generateMathQuestions(1);
    room.send("startGameRequested", { questions: questions, players: players });
  };

  useEffect(() => {
    setQuestionData(generateMathQuestions(1));
  }, []);

  return (
    <div>
      <div className="p-4">
        {stage == STAGE.CREATE_JOIN_GAME && (
          <CreateRoom
            players={players}
            onCreateClick={onCreateClick}
            onCreateCoopClick={onCreateCoopClick}
            onJoinClick={onJoinClick}
            battleName={battleName}
            setBattleName={setBattleName}
            coopName={coopName}
            setCoopName={setCoopName}
            joinName={joinName}
            setJoinName={setJoinName}
            code={code}
            setCode={setCode}
          />
        )}
        {stage == STAGE.LOBBY && (
          <Lobby
            room={room}
            players={players}
            code={code}
            startGame={onStartGameRequested}
            leader={leader}
            isLoading={isLoading}
          />
        )}
        {stage == STAGE.BATTLE && (
          <BattleComponent
            questions={questionData}
            players={players}
            room={room}
            gotoPostGameLobby={() => setStage(STAGE.POSTGAME_LOBBY)}
          />
        )}
        {stage == STAGE.COOP && (
          <CoopBattleComponent
            questions={questionData}
            room={room}
            goToGameOver={() => setStage(STAGE.COOP_GAME_OVER)}
          />
        )}
        {stage == STAGE.POSTGAME_LOBBY && (
          <PostGameLobby
            goToLobby={() => setStage(STAGE.LOBBY)}
            gotoPostGameLobby={() => setStage(STAGE.POSTGAME_LOBBY)}
            room={room}
            length={players.length}
          />
        )}
        {stage == STAGE.COOP_GAME_OVER && (
          <CoopGameOver
            room={room}
            goToLobby={() => setStage(STAGE.CREATE_JOIN_GAME)}
          />
        )}
      </div>
    </div>
  );
};
export default MathBattle;
