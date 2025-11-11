import "../App.css";
import '../styles/playersBtnQA.css';
import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from 'react-icons/fa6';
import correctSound from '../audio/correct.mp3';
import incorrectSound from '../audio/incorrect.mp3';


export default function PlayersBtnAnswer({ players, questionValue, updatePlayerScore, whichPage, clickedButtons, setClickedButtons }) {
    const [animations, setAnimations] = useState([]);
    const correctAudioRef = useRef(null);
    const incorrectAudioRef = useRef(null);
    // const [animationClass, setAnimationClass] = useState("");
    // const [clickedButtons, setClickedButtons] = useState({});

    // Load audio once
    useEffect(() => {
        correctAudioRef.current = new Audio(correctSound);
        incorrectAudioRef.current = new Audio(incorrectSound);

        // Optional: ensure they're preloaded
        correctAudioRef.current.load();
        incorrectAudioRef.current.load();
    }, []);

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
            /*if (isCorrect) {
                updatePlayerScore(playerName, wasCorrect ? -value : value, true);
                const audio = new Audio(correctSound);
                audio.play();
            } else {
                updatePlayerScore(playerName, wasIncorrect ? value : -value, false);
                const audio = new Audio(incorrectSound);
                audio.play();
            }*/

            if (isCorrect) {
                if (!wasCorrect) {
                    correctAudioRef.current.currentTime = 0; // restart from start
                    correctAudioRef.current.play();
                }
                updatePlayerScore(playerName, wasCorrect ? -value : value, true);
            } else {
                if (!wasIncorrect) {
                    incorrectAudioRef.current.currentTime = 0;
                    incorrectAudioRef.current.play();
                }
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

    return (
        <div className="player-answer">
            {/* <div className="player-answer" style={gridStyle}> */}
            {players.map((player, index) => (
                <div className="player" key={player.name}>
                    <div className="btn-container">
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

