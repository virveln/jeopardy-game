import { useState, useEffect } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import Gameboard from "./components/Gameboard";
import ShowQuestion from "./components/ShowQuestion";
import ShowAnswer from "./components/ShowAnswer";
import Scoreboard from "./components/Scoreboard";
import GameSettings from "./components/GameSettings";
import Attribution from "./components/Attribution";
import Instructions from "./components/Instructions";
import AllAnswers from './components/AllAnswersG';
import AllAnswersMobile from './components/AllAnswersMobile';

import { ReactComponent as LightbulbThumbnail } from './images/thumbnails/lightbulb.svg';
import { ReactComponent as TreeThumbnail } from './images/thumbnails/tree.svg';
import { ReactComponent as FireworkThumbnail } from './images/thumbnails/firework1.svg';
import advaniaThumbnail from './images/thumbnails/advania.png';

// import { ReactComponent as Nyår2025Thumbnail } from './images/thumbnails/firework1.svg';

function App() {
  const [currentPage, setCurrentPage] = useState("start");
  const [selectedCells, setSelectedCells] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [players, setPlayers] = useState([]);
  const [theme, setTheme] = useState('allmant');
  const [hasAnimated, setHasAnimated] = useState(false);
  const [allCellsPlayed, setAllCellsPlayed] = useState(false);
  const [clickedButtons, setClickedButtons] = useState({});
    const [categoryAudioUnlocked, setCategoryAudioUnlocked] = useState(false);


  const allThemes = [
    { value: 'allmant', label: 'Allmänt', thumbnail: LightbulbThumbnail },
    { value: 'jul', label: 'Jul', thumbnail: TreeThumbnail },
    { value: 'nyår2024', label: 'Nyår 2024', thumbnail: FireworkThumbnail },
    { value: 'nyår2025', label: 'Nyår 2025', thumbnail: FireworkThumbnail },
    { value: 'advania', label: 'Advania', thumbnail: advaniaThumbnail },

    // { value: 'karlstad', label: 'Karlstahäng', thumbnail: AllmantThumbnail },
  ];

  // Check if mobile to choose which component for showing all answers
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

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
  const startGame = () => {setCurrentPage("gameboard"); setCategoryAudioUnlocked(true);}
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
  // const updatePlayerScore = (playerName, points, isCorrect) => {
  //   setPlayers((prevPlayers) =>
  //     prevPlayers.map((player) =>
  //       player.name === playerName
  //         ? {
  //           ...player,
  //           score: player.score + (isCorrect ? points : -points),
  //         }
  //         : player
  //     )
  //   );
  // };
  const updatePlayerScore = (playerName, points, isCorrect) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === playerName
          ? {
            ...player,
            score: player.score + points,
          }
          : player
      )
    );
  };

  return (
    <div>
      {currentPage === "allAnswers" && (
        // <AllAnswers
        //   allThemes={allThemes}
        // />
        isMobile ? <AllAnswersMobile allThemes={allThemes} /> : <AllAnswers allThemes={allThemes} />
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
          themes={allThemes}
          backToStart={backToStart}
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
          hasAnimated={hasAnimated}
          setHasAnimated={setHasAnimated}
          setAllCellsPlayed={setAllCellsPlayed}
          setClickedButtons={setClickedButtons}
          categoryAudioUnlocked={categoryAudioUnlocked}

        />
      )}
      {currentPage === "showQuestion" && (
        <ShowQuestion
          question={selectedQuestion}
          goToAnswer={goToAnswer}
          players={players}
          updatePlayerScore={updatePlayerScore}
          clickedButtons={clickedButtons}
          setClickedButtons={setClickedButtons}
        />
      )}
      {currentPage === "showAnswer" && (
        <ShowAnswer
          question={selectedQuestion}
          backToGameboard={backToGameboard}
          players={players}
          updatePlayerScore={updatePlayerScore}
          clickedButtons={clickedButtons}
          setClickedButtons={setClickedButtons}

        />
      )}
      {currentPage === "scoreboard" && (
        <Scoreboard
          players={players}
          backToGameboard={backToGameboard}
          theme={theme}
          allCellsPlayed={allCellsPlayed}
          setHasAnimated={setHasAnimated}
        />
      )}
    </div>
  );
}

export default App;