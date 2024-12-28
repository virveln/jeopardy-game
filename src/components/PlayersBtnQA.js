import "../App.css";
import '../styles/playersBtnQA.css';
import React, { useState, useEffect } from "react";
import { FaCheck } from 'react-icons/fa6';

export default function PlayersBtnAnswer({ players, questionValue, updatePlayerScore, whichPage, clickedButtons, setClickedButtons }) {
    const [animations, setAnimations] = useState([]);
    // const [animationClass, setAnimationClass] = useState("");
    // const [clickedButtons, setClickedButtons] = useState({});

    // When player click on button to give or take points from player
    const handleButtonClick = (playerName, value, isCorrect, buttonContent, e) => {
        // if (clickedButtons[playerName]) return;

        // Update state to mark button as clicked 
        // setClickedButtons((prev) => ({
        //     ...prev,
        //     [playerName]: isCorrect ? "correct" : "incorrect",
        // }));
        setClickedButtons((prev) => {
            const prevState = prev[playerName] || { correct: false, incorrect: false };
            const wasCorrect = prevState.correct;
            const wasIncorrect = prevState.incorrect;

            // Uppdatera poäng baserat på toggling
            if (isCorrect) {
                updatePlayerScore(playerName, wasCorrect ? -value : value, true);
            } else {
                updatePlayerScore(playerName, wasIncorrect ? value : -value, false);
            }

            return {
                ...prev,
                [playerName]: {
                    correct: isCorrect ? !wasCorrect : wasCorrect,
                    incorrect: !isCorrect ? !wasIncorrect : wasIncorrect,
                },
            };
        });

        // Get positions of button
        const buttonRect = e.target.getBoundingClientRect();

        // Add a new animation object
        const newAnimation = {
            id: Date.now(), // Unique ID for the animation
            content: buttonContent,
            playerName,
            left: buttonRect.left + buttonRect.width / 2,
            top: buttonRect.top + buttonRect.height / 2,
            animationClass: isCorrect ? "correct-animation" : "incorrect-animation",
        };

        setAnimations((prev) => [...prev, newAnimation]);
        // updatePlayerScore(playerName, value, isCorrect);

        setTimeout(() => {
            setAnimations((prev) => prev.filter((anim) => anim.id !== newAnimation.id));
        }, 1000);
    };

    // Shortcut controls so each player has a number
    // const handleKeyPress = (e) => {
    //     const playerIndex = parseInt(e.key, 10) - 1; // 1-indexerade tangenter
    //     if (playerIndex >= 0 && playerIndex < players.length) {
    //         const playerName = players[playerIndex].name;
    //         const button = document.getElementById(`btn-${whichPage === "question" ? 'incorrect' : 'correct'}-${playerName}`);
    //         if (button) { button.click(); }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("keydown", handleKeyPress);
    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress);
    //     };
    // }, [players]);

    // Different amount of columns depending on amount of players
    // const getColumns = (count) => {
    //     if (count <= 2) return "1fr";
    //     if (count <= 4) return "1fr 1fr";
    //     return "1fr 1fr 1fr";
    // };

    // const gridStyle = {
    //     gridTemplateColumns: getColumns(players.length),
    // };

    return (
        <div className="player-answer">
            {/* <div className="player-answer" style={gridStyle}> */}
            {players.map((player, index) => (
                <div className="player" key={player.name}>
                    <div className="btn-container">
                        {/* <button
                            id={`${whichPage === "question" ? 'btn-incorrect' : 'btn-correct'}-${player.name}`}
                            className={`btn-answer 
                                ${whichPage === "question" ? 'btn-incorrect' : 'btn-correct'} 
                                ${whichPage === "question"
                                    ? (clickedButtons[player.name] === "incorrect" ? "disabled-red" : "")
                                    : (clickedButtons[player.name] === "correct" ? "disabled-green" : "")
                                }`}
                            onClick={(e) => {
                                if (whichPage === "question") { handleButtonClick(player.name, questionValue, false, "x", e); }
                                else { handleButtonClick(player.name, questionValue, true, <FaCheck />, e); }
                            }}
                        >
                            {whichPage === "question" ? 'x' : <FaCheck />}
                        </button> */}


                        {/* <button
                            id={`btn-incorrect-${player.name}`}
                            className={`btn-answer btn-incorrect ${ (clickedButtons[player.name] === "incorrect" ? "disabled-red" : "")}`}
                            onClick={(e) => { handleButtonClick(player.name, questionValue, false, "x", e) }}
                        >
                            x
                        </button>
                        <button
                            id={`btn-correct-${player.name}`}
                            className={`btn-answer btn-correct ${ (clickedButtons[player.name] === "correct" ? "disabled-green" : "")}`}
                            onClick={(e) => { handleButtonClick(player.name, questionValue, true, <FaCheck />, e) }}
                        >
                            <FaCheck />
                        </button> */}

                        <button
                            id={`btn-correct-${player.name}`}
                            className={`btn-answer btn-correct ${clickedButtons[player.name]?.correct ? "disabled-green" : ""
                                }`}
                            onClick={(e) => handleButtonClick(player.name, questionValue, true, <FaCheck />, e)}
                            // disabled={clickedButtons[player.name]?.correct || clickedButtons[player.name]?.incorrect}
                        >
                            <FaCheck className="check-icon" />
                        </button>
                        <span className="btn-divider"></span>
                        <button
                            id={`btn-incorrect-${player.name}`}
                            className={`btn-answer btn-incorrect ${clickedButtons[player.name]?.incorrect ? "disabled-red" : ""
                                }`}
                            onClick={(e) => handleButtonClick(player.name, questionValue, false, "x", e)}
                            // disabled={clickedButtons[player.name]?.correct || clickedButtons[player.name]?.incorrect}
                        >
                            <span className="">X</span>
                        </button>





                    </div>
                    {/* <h4 className="player-name" title={`Genväg: ${index + 1}`}>{player.name}</h4> */}
                    <h4 className="player-name">{player.name}</h4>
                </div>
            ))}

            {/* Animation copy */}
            {animations.map((animation) => (
                <div
                    key={animation.id}
                    className={`floating-animation ${animation.animationClass}`}
                    style={{
                        left: `${animation.left}px`,
                        top: `${animation.top}px`,
                    }}
                >
                    {animation.content}
                </div>
            ))}
        </div>
    );
}

