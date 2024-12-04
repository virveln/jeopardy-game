import "../App.css";
import '../styles/startpage.css';
import React, { useEffect } from "react";

export default function StartPage({ goToGameSettings, goToInstructions, goToAttributions }) {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
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
            {/* <h1 className='start-title'>NYÅR 2024 EDITION</h1> */}
            <div className="btn-start-container">
                <button className="btn btn-startpage" onClick={goToGameSettings}>Play Game</button>
                <button className="btn btn-startpage" onClick={goToInstructions}>Instructions</button>
            </div>
            <p className="btn-to-attribution" onClick={goToAttributions} >Attribution</p>
            <p className="tips">Press F11 for full-screen mode</p>
        </div>
    );
}

