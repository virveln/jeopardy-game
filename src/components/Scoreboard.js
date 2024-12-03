import "../App.css";
import '../styles/scoreboard.css';
import jeopardyLogo from '../images/jeopardy.gif';
import { useEffect } from "react";

export default function Scoreboard({ players, onBack }) {
    const handleKeyPress = (e) => {
        if (e.key === "s" | e.key === "S" ) {
            onBack();
        }
    };

    useEffect(() => {
        // Lägg till event listener för tangenttryck
        window.addEventListener("keydown", handleKeyPress);

        // Rensa event listener vid unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // Körs endast en gång vid montering
    
    return (
        <div className="background-scoreboard scoreboard">
            <img src={jeopardyLogo} alt="jeopardy" className="gif" />
            <h2 id="sub-title" className="scoreboard-subtitle title-position">Nyår 2024 edition</h2>
            <div className="player-list-container">
                <fieldset className="player-list border-shine">
                    <legend className="player-list-title">Scoreboard</legend>
                    <ul>
                        {players
                            .slice()
                            .sort((a, b) => b.score - a.score)
                            .map((player) => (
                                <li key={player.name} className="player-item">
                                    <span className="player-name">{player.name}</span>
                                    <span className="player-score">{player.score} p</span>
                                </li>
                            ))}
                    </ul>
                </fieldset>
            </div>
            <button className="btn" onClick={onBack}>
                Back to Gameboard
            </button>
        </div>
    );
}