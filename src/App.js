//byta ut från promts
//knappar på spelares namn ist för prompt när spelare har svarat

import { useState } from 'react';
import './App.css';

const levels = [100, 200, 300, 400, 500];

const questions = [
  {
    category: 'Nyår',
    question: [
      'Det var året alla var rädda för skulle förändra samhället.',
      'Detta nyårsfirande varar i 15 dagar och kulminerar vanligtvis med en färgstark drakdans.',
      'På denna plats sänks en stor boll vid midnatt.',
      'I detta land firas nyårsafton med en ljusfestival känd som Diwali.',
      'Detta kallas nyårsafton i Skottland.'
    ],
    answer: [
      'Vad är år 2000',
      'Vad är kinesiska nyåret',
      'Vad är Times Square i New York',
      'Vad är Indien',
      'Vad är Hogmanay'
    ],
    image: [
      '/img/2000.avif',
      '/img/kinesiskanyåret.jpeg',
      '/img/balldrop.jpg',
      '/img/diwali.jpg',
      '/img/hogmanay.jpg'
    ]
  },
  {
    category: 'Nyårskarameller',
    question: [
      '"Hur ofta tänker du på..."',
      'Varumärket som äger Barbie.',
      'Kommunen (som börjar på L) utsågs till att vara bäst att leva i 2023.',
      'Detta partiets ledare postade tweeten:<br> <em>"Vet ni vad jag är jävligt trött på? Äldre, privilegierade och, dare I say it, vita män"</em>',
      'Argentinas president pratar med ... via sitt medium.'
    ],
    answer: [
      'Vad är romarriket',
      'Vad är Mattel',
      'Vad är Luleå',
      'Vad är Centerpartiet (Muharrem Demirok)',
      'Vem är hans döda hund'
    ],
    image: [
      '/img/romarriket.jpg',
      '/img/mattel.jpg',
      '/img/lulea.jpg',
      '/img/centerpartiet.jpg',
      '/img/argentina.webp'
    ]
  },
  {
    category: 'Nya ord',
    question: [
      'Längre relation som befinner sig någonstans mellan romantiskt förhållande och vänskap.',
      'Drag eller beteende hos en person som en annan person finner frånstötande.',
      'Lättare fysisk träning för äldre där föremål i utemiljön används exempelvis som hinder att klättra över.',
      'Graviditet som genomförs helt utan kontakt med vården.',
      'Person som får fördelar i sin karriär för att den har en känd eller inflytelserik förälder.'
    ],
    answer: [
      'Vad är situationship',
      'Vad är ick',
      'Vad är tantparkour',
      'Vad är vild graviditet <br>(graviditeten är oövervakad och att kvinnan inte går på några kontroller hos mödravården)',
      'Vad är nepo baby'
    ],
    image: [
      '/img/situationship.jpg',
      '/img/ick.jpg',
      '/img/tantparkour.jpeg',
      '/img/graviditet.jpeg',
      '/img/nepobaby.webp'
    ]
  },
  {
    category: 'Musik',
    question: [
      'Duon ... och artisten ... är svenska välspelade artister bärande balaklava.',
      'Artisten är årets mest globala spelade.',
      'Artisten blev stämd av sina egna dansare.',
      'Artisten har påståtts sålt sin själ till djävulen.',
      'Låten var årets mest globala spelade.'
    ],
    answer: [
      'Vem är Hooja och Fröken snusk',
      'Vem är Taylor Swift',
      'Vem är Lizzo',
      'Vem är Doja Cat',
      'Vad är Flowers med Miley Cyrus'
    ],
    image: [
      '/img/hooja-frökensnusk.jpg',
      '/img/taylorswift.jpg',
      '/img/lizzo.jpeg',
      '/img/dojacat.jpg',
      '/img/flowers.jpg'
    ]
  },
  {
    category: 'Löften',
    question: [
      'Detta är det vanligste nyårslöftet.',
      'Detta kallas det när man länkar ihop sina lillfingrar <br>(på engelska).',
      'Denna artist har en låt som innehåller följande text: <br><br><em>I make no promises, I can\'t do golden rings. <br>But I\'ll give you everything (Tonight)</em>',
      'Detta heter låten med följande text: <br><br><em>Tears stream down your face <br>I promise you I will learn from my mistakes <br>Tears stream down your face, and I... <br>Lights will guide you home</em>',
      'Denna artist har en låt som innehåller följande text:<br><br><em>Just like a chick in the casino <br>Take your bank before I pay you out <br>I promise this, promise this <br>Check this hand \'cause I\'m marvelous</em>'
    ],
    answer: [
      'Vad är att bli mer hälsosam (träna, nyttig etc.)',
      'Vad är pinky promise',
      'Vem är Sam Smith (och Calvin Harris) med Promises',
      'Vad är Fix You med Coldplay',
      'Vem är Lady Gaga med Pokerface'
    ],
    image: [
      '/img/healty.jpg',
      '/img/pinkypromise.jpg',
      '/img/promises.jpg',
      '/img/coldplay.avif',
      '/img/ladygaga.jpg'
    ]
  }
];


function App() {

  //check if game has started, skrivs likt detta för att uppdatera UI
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [showAnswerPage, setShowAnswerPage] = useState(false);
  const [showScoreboardPage, setShowScoreboardPage] = useState(false);

  const addPlayers = () => {
    let numberOfPlayers = prompt("Enter the number of players:");
    numberOfPlayers = parseInt(numberOfPlayers);

    if(isNaN(numberOfPlayers) || numberOfPlayers <= 0){
      alert("Please enter a valid number greater han 0.");
      return;
    }

    const newPlayers = [];
    for (let i = 1; i <= numberOfPlayers; i++){
      const playerName = prompt('Enter the name of Player ' + i + ':');
      newPlayers.push({name: playerName, score: 0});
    }

    setPlayers(newPlayers);
    setGameStarted(true);
  };

const handleQuestionClick = (levelIndex, categoryIndex) => {
  const category = questions[categoryIndex];
    const question = category.question[levelIndex];
    const answer = category.answer[levelIndex];
    const image = category.image[levelIndex];
    
    setCurrentQuestion({
      question,
      answer,
      image,
      category: category.category,
      level: levels[levelIndex],
    });
    setShowQuestionPage(true);
};

const showAnswer = () => {
  setShowQuestionPage(false);
  setShowAnswerPage(true);
};

const checkAnswer = (isCorrect) => {
  let playerName = prompt("Enter the name of the player who answered:");
  const playerIndex = players.findIndex(player => player.name === playerName);

  if (playerIndex >= 0) {
    const newPlayers = [...players];
    newPlayers[playerIndex].score += isCorrect ? currentQuestion.level : 0;
    setPlayers(newPlayers);
  } else {
    alert("Player not found.");
  }

  setShowAnswerPage(false);
};

const backToBoard = () => {
  setShowAnswerPage(false);
  setShowQuestionPage(false);
};

const showScoreboard = () => {
  setShowScoreboardPage(true);
};

  
return (
  <div className="App">
    {!gameStarted && (
      <div id="start-page" className="background-start">
        <h1 id='start-title' >NYÅR 2024 EDITION</h1>
        <button className="btn" onClick={addPlayers}>Play Game</button>
      </div>
    )}

    {gameStarted && (
      <div id="game-page" className="background-game">
        <h1 id='game-title' >Jeopardy!</h1>
        <h2 id='sub-title' >Nyår 2024 Edition</h2>
     
          <div id="board-page">
            <div id="board">

              <div className="categories-row">
              {questions.map((category, categoryIndex) => (
                <div key={categoryIndex} className="category">
                  {category.category}
                </div>
              ))}
              </div>

              {levels.map((level, levelIndex) => (
              <div key={levelIndex} className="levels-row">
                {questions.map((_, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="cell"
                    onClick={() => handleQuestionClick(levelIndex, categoryIndex)}
                  >
                    {level}p
                  </div>
                ))}
              </div>
              ))}

            </div>
            <button id='scoreboard-btn' className="btn" onClick={showScoreboard}>Scoreboard</button>
          </div>
        

        {showQuestionPage && (
          <div id="question-page">
            <img src={currentQuestion?.image} alt="Question related" />
            <div id='question-content'></div>
            <h3>{currentQuestion?.question}</h3>
            <button id='show-answer-btn' className="btn" onClick={showAnswer}>Show Answer</button>
          </div>
        )}

        {showAnswerPage && (
          <div id="answer-page">
            <img src={currentQuestion?.image} alt="Answer related" />
            <div id='answer-content'></div>
            <h3>{currentQuestion?.answer}</h3>
            <button id='correct-btn' className="btn" onClick={() => checkAnswer(true)}>Correct</button>
            <button id='wrong-btn' className="btn" onClick={() => checkAnswer(false)}>Wrong</button>
          </div>
        )}

        {showScoreboardPage && (
          <div id="scoreboard-page">
            <div id='scoreboard-content'></div>
            <h3>Scoreboard</h3>
            {players.map((player, index) => (
              <div key={index}>
                {player.name}: {player.score} p
              </div>
            ))}
            <button id="back-from-score-btn" className="btn" onClick={backToBoard}>Back to Board</button>
          </div>
        )}
      </div>
    )}
  </div>
);
}





export default App;
