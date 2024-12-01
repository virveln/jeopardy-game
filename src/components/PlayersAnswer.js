import "../App.css";
import '../styles/playersAnswer.css';
import React, { useState } from "react";
import { FaCheck } from 'react-icons/fa6';

export default function PlayersAnswer({ players, questionValue, updatePlayerScore }) {
    const [animation, setAnimation] = useState(null); // För att hantera animationen
    const [animationClass, setAnimationClass] = useState("");

    const handleButtonClick = (playerName, value, isCorrect, buttonContent, e) => {
        // Få knappens position
        const buttonRect = e.target.getBoundingClientRect();
        // Starta animationen med position från knappen
        setAnimation({
            content: buttonContent,
            playerName,
            left: buttonRect.left + buttonRect.width / 2,
            top: buttonRect.top + buttonRect.height / 2,
        });

        // Sätt färgen på animationen baserat på om det är korrekt eller felaktigt
        setAnimationClass(isCorrect ? "correct-animation" : "incorrect-animation");

        // Uppdatera spelarens poäng
        updatePlayerScore(playerName, value, isCorrect);

        // Rensa animationen efter 1 sekund
        setTimeout(() => setAnimation(null), 1000);
    };

    return (
        <div className="player-answer">
            {players.map((player) => (
                <div className="player" key={player.name}>
                    <h4 className="player-name">{player.name}</h4>
                    <div className="btn-container">
                        <button
                            className="btn-answer btn-correct"
                            // onClick={() => { updatePlayerScore(player.name, questionValue, true); }}
                            onClick={(e) => handleButtonClick(player.name, questionValue, true, <FaCheck />, e)}
                        >
                            <FaCheck />
                        </button>
                        <button
                            className="btn-answer btn-incorrect"
                            // onClick={() => { updatePlayerScore(player.name, questionValue, false); }}
                            onClick={(e) => handleButtonClick(player.name, questionValue, false, "x", e)}
                        >
                            x
                        </button>
                    </div>
                </div>
            ))}

            {/* Animation för kopian */}
            {animation && (
                <div className={`floating-animation ${animationClass}`}
                    style={{
                        left: `${animation.left}px`,
                        top: `${animation.top}px`,
                    }}
                >
                    {animation.content}
                </div>
            )}
        </div>
    );
}

