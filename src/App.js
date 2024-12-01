import { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import Gameboard from "./components/Gameboard";
import ShowQuestion from "./components/ShowQuestion";
import ShowAnswer from "./components/ShowAnswer";
import Scoreboard from "./components/Scoreboard";
import AddPlayers from "./components/AddPlayers";
import Attribution from "./components/Attribution";
import Instructions from "./components/Instructions";

function App() {

  //UI
  const [currentPage, setCurrentPage] = useState("start"); // Håller reda på vilken sida som visas
  const [selectedCells, setSelectedCells] = useState([]); // Sparar valda celler
  const [selectedQuestion, setSelectedQuestion] = useState(null); // För att spara den valda frågan

  // Players and theme
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
    console.log(selectedQuestion);
    setCurrentPage("showQuestion"); // Gå till ShowQuestion
  };

  const addPlayers = () => setCurrentPage("addPlayers");
  const instructions = () => setCurrentPage("instructions");
  const startGame = () => setCurrentPage("gameboard");
  const goToAnswer = () => setCurrentPage("showAnswer");
  const backToGameboard = () => setCurrentPage("gameboard");
  const goToScoreboard = () => setCurrentPage("scoreboard");
  const goToAttributions = () => setCurrentPage("attribution");
  const backToStart = () => setCurrentPage("start");
  const openAllAnswers = () => {
    const url = window.location.origin + "/jeopardy-game/all-answers";
    window.open(url, "_blank");
  };
  
  // Function to update a player's score
  const updatePlayerScore = (playerName, points, isCorrect) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? {
            ...player,
            score: player.score + (isCorrect ? points : -points), // Lägg till vid rätt, dra av vid fel
          }
          : player
      )
    );
  };


  return (
    <div>
      {currentPage === "start" && (
        <StartPage
          enterPlayers={addPlayers}
          instructions={instructions}
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
      {currentPage === "addPlayers" && (
        <AddPlayers
          onStart={startGame}
          setPlayers={setPlayers}
          setTheme={setTheme}
        />
      )}
      {currentPage === "gameboard" && (
        <Gameboard
          selectedCells={selectedCells}
          setSelectedCells={setSelectedCells}
          onSelectQuestion={handleQuestionSelection}
          onGoToScoreboard={goToScoreboard}
          players={players}
          theme={theme}
        />
      )}
      {currentPage === "showQuestion" && (
        <ShowQuestion
          question={selectedQuestion}
          toAnswer={goToAnswer}
        />
      )}
      {currentPage === "showAnswer" && (
        <ShowAnswer
          question={selectedQuestion}
          onBack={backToGameboard}
          players={players}
          updatePlayerScore={updatePlayerScore}

        />
      )}
      {currentPage === "scoreboard" && (
        <Scoreboard
          players={players}
          onBack={backToGameboard}
        />
      )}
    </div>
  );
}

export default App;