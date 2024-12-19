import "../App.css";
import '../styles/startpage.css';
import React, { useEffect } from "react";
import jeopardyName from '../images/jeopardy-name2.png'
import StarTrail from "./StarTrail";

export default function StartPage({ goToGameSettings, goToInstructions, goToAttributions }) {
    // Shortcuts
    const handleKeyPress = (e) => {
        if (e.key === " ") {
            goToGameSettings();
        }
        else if (e.key === "a" | e.key === "A") {
            goToAttributions();
        }
        else if (e.key === "i" | e.key === "I") {
            goToInstructions();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="start-page background-start">
            <StarTrail />
            {/* <h1 className='start-title'>JEOPARDY</h1> */}
            <img className="jeopardy-name" src={jeopardyName} alt="jeopardy" />
            <div className="btn-start-container">
                <button className="btn btn-startpage" onClick={goToGameSettings}>Play Game</button>
                <button className="btn btn-startpage" onClick={goToInstructions}>Instructions</button>
            </div>
            <p className="btn-to-attribution" onClick={goToAttributions} >Attribution</p>
            <p className="tips">Press <kbd>F11</kbd> for full-screen mode</p>
        </div>
    );
}

