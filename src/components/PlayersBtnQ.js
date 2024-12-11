// **************
// NOT IN USE RIGHT NOW, USING PLAYERSBTNQA INSTEAD
// **************

import "../App.css";
import '../styles/playersBtnQA.css';
import React, { useState, useEffect } from "react";

export default function PlayersBtnQ ({ players, questionValue, updatePlayerScore }) {
    const [animation, setAnimation] = useState(null); // För att hantera animationen
    const [animationClass, setAnimationClass] = useState("");
    const [clickedButtons, setClickedButtons] = useState({});

    const handleButtonClick = (playerName, value, isCorrect, buttonContent, e) => {
        if (clickedButtons[playerName]) return;
        
        // Uppdatera state för att markera knappen som klickad
        setClickedButtons((prev) => ({
            ...prev,
            [playerName]: isCorrect ? "correct" : "incorrect",
        }));

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

    const handleKeyPress = (e) => {
        // Kontrollera om tangenttrycket matchar en spelares index
        const playerIndex = parseInt(e.key, 10) - 1; // 1-indexerade tangenter
        if (playerIndex >= 0 && playerIndex < players.length) {
            // Simulera knapptryckning
            const playerName = players[playerIndex].name;
            const button = document.getElementById(`btn-icorrect-${playerName}`);
            if (button) {
                button.click(); // Trigga knappens click-event
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [players]);


    const getColumns = (count) => {
        if (count <= 2) return "1fr"; // En kolumn för 2 spelare
        if (count <= 4) return "1fr 1fr"; // Två kolumner för 3-4 spelare
        return "1fr 1fr 1fr"; // Tre kolumner för 5-6 spelare
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
                            id={`btn-icorrect-${player.name}`}
                            className={`btn-answer btn-incorrect ${clickedButtons[player.name] === "incorrect" ? "disabled-r" : ""}`}
                            // onClick={() => { updatePlayerScore(player.name, questionValue, false); }}
                            onClick={(e) => handleButtonClick(player.name, questionValue, false, "x", e)}
                        >
                            x
                        </button>
                    </div>
                    <h4 className="player-name">{player.name}</h4>
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

