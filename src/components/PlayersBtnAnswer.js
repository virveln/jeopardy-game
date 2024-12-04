import "../App.css";
import '../styles/playersBtnAnswer.css';
import React, { useState, useEffect } from "react";
import { FaCheck } from 'react-icons/fa6';

export default function PlayersBtnAnswer({ players, questionValue, updatePlayerScore, whichPage }) {
    const [animation, setAnimation] = useState(null);
    const [animationClass, setAnimationClass] = useState("");
    const [clickedButtons, setClickedButtons] = useState({});

    const handleButtonClick = (playerName, value, isCorrect, buttonContent, e) => {
        if (clickedButtons[playerName]) return;

        // Update state to mark button as clicked 
        setClickedButtons((prev) => ({
            ...prev,
            [playerName]: isCorrect ? "correct" : "incorrect",
        }));

        // Get positions of button
        const buttonRect = e.target.getBoundingClientRect();
        // Start animation from button position
        setAnimation({
            content: buttonContent,
            playerName,
            left: buttonRect.left + buttonRect.width / 2,
            top: buttonRect.top + buttonRect.height / 2,
        });

        setAnimationClass(isCorrect ? "correct-animation" : "incorrect-animation");
        updatePlayerScore(playerName, value, isCorrect);
        setTimeout(() => setAnimation(null), 1000);
    };

    // Shortcut controls so each player has a number
    const handleKeyPress = (e) => {
        const playerIndex = parseInt(e.key, 10) - 1; // 1-indexerade tangenter
        if (playerIndex >= 0 && playerIndex < players.length) {
            const playerName = players[playerIndex].name;
            const button = document.getElementById(`btn-${whichPage === "question" ? 'btn-incorrect' : 'btn-correct'}-${playerName}`);
            if (button) { button.click(); }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [players]);

    // Different amount of columns depending on amount of players
    const getColumns = (count) => {
        if (count <= 2) return "1fr";
        if (count <= 4) return "1fr 1fr";
        return "1fr 1fr 1fr";
    };

    const gridStyle = {
        gridTemplateColumns: getColumns(players.length),
    };

    return (
        <div className="player-answer" style={gridStyle}>
            {players.map((player) => (
                <div className="player" key={player.name}>
                    <div className="btn-container">
                        <button
                            id={`${whichPage === "question" ? 'btn-incorrect' : 'btn-correct'}-${player.name}`}
                            className={`btn-answer 
                                ${whichPage === "question"
                                    ? 'btn-incorrect'
                                    : 'btn-correct'} 
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
                        </button>
                    </div>
                    <h4 className="player-name">{player.name}</h4>
                </div>
            ))}

            {/* Animation copy */}
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

