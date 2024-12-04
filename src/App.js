import { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import Gameboard from "./components/Gameboard";
import ShowQuestion from "./components/ShowQuestion";
import ShowAnswer from "./components/ShowAnswer";
import Scoreboard from "./components/Scoreboard";
import GameSettings from "./components/GameSettings";
import Attribution from "./components/Attribution";
import Instructions from "./components/Instructions";
import AllAnswers from './components/AllAnswers';

function App() {
  const [currentPage, setCurrentPage] = useState("start");
  const [selectedCells, setSelectedCells] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [players, setPlayers] = useState([]);
  const [theme, setTheme] = useState('nyår2024');

  const handleQuestionSelection = (category, question) => {
    setSelectedQuestion({
      category: category.category,
      question: question.question,
      answer: question.answer,
      image: question.image,
      imageSource: question.imageSource,
      value: question.level,
    });
    setCurrentPage("showQuestion");
  };

  const goToGameSettings = () => setCurrentPage("gameSettings");
  const goToAttributions = () => setCurrentPage("attribution");
  const goToInstructions = () => setCurrentPage("instructions");
  const startGame = () => setCurrentPage("gameboard");
  const goToAnswer = () => setCurrentPage("showAnswer");
  const goToScoreboard = () => setCurrentPage("scoreboard");
  const backToGameboard = () => setCurrentPage("gameboard");
  const backToStart = () => setCurrentPage("start");

  //Because of publication on Github pages this was the solution to open in another tab
  const openAllAnswers = () => {
    //window.open(window.location.origin + "/jeopardy-game/all-answers", "_blank");
    window.open(window.location.origin + "/jeopardy-game/", "_blank");
    setCurrentPage("allAnswers");
  };

  // Update a player's score
  const updatePlayerScore = (playerName, points, isCorrect) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? {
            ...player,
            score: player.score + (isCorrect ? points : -points),
          }
          : player
      )
    );
  };

  return (
    <div>
      {currentPage === "allAnswers" && (
        <AllAnswers/>
      )}
      {currentPage === "start" && (
        <StartPage
          goToGameSettings={goToGameSettings}
          goToInstructions={goToInstructions}
          goToAttributions={goToAttributions} />
      )}
      {currentPage === "instructions" && (
        <Instructions
          openAllAnswers={openAllAnswers}
          backToStart={backToStart}
        />
      )}
      {currentPage === "attribution" && (
        <Attribution
          backToStart={backToStart}
        />
      )}
      {currentPage === "gameSettings" && (
        <GameSettings
          startGame={startGame}
          setPlayers={setPlayers}
          setTheme={setTheme}
        />
      )}
      {currentPage === "gameboard" && (
        <Gameboard
          selectedCells={selectedCells}
          setSelectedCells={setSelectedCells}
          handleQuestionSelection={handleQuestionSelection}
          goToScoreboard={goToScoreboard}
          players={players}
          theme={theme}
        />
      )}
      {currentPage === "showQuestion" && (
        <ShowQuestion
          question={selectedQuestion}
          goToAnswer={goToAnswer}
          players={players}
          updatePlayerScore={updatePlayerScore}
        />
      )}
      {currentPage === "showAnswer" && (
        <ShowAnswer
          question={selectedQuestion}
          backToGameboard={backToGameboard}
          players={players}
          updatePlayerScore={updatePlayerScore}

        />
      )}
      {currentPage === "scoreboard" && (
        <Scoreboard
          players={players}
          backToGameboard={backToGameboard}
        />
      )}
    </div>
  );
}

export default App;