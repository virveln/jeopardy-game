import "../App.css";
import '../styles/startpage.css';
import React, { useEffect } from "react";
// import jeopardyName from '../images/jeopardy-name2.png'
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
            <div className="jeopardy-name">
                <svg width="750" height="350" viewBox="0 0 750 350">
                    <path id="arcPathTop" d="M 50,200 Q 375,70 700,200" fill="transparent" stroke="transparent" />

                    <path id="arcPathBottom" d="M 50,330 Q 375,200 700,330" fill="transparent" stroke="transparent" />

                    <text fill="#fff" font-size="110" font-family="Rammetto One" stroke="#A31ACB" stroke-width="3" text-anchor="middle">
                        <textPath href="#arcPathTop" startOffset="50%">
                            WHAT IS..
                        </textPath>
                    </text>

                    <text fill="#fff" font-size="70" font-family="Rammetto One" stroke="#A31ACB" stroke-width="3" text-anchor="middle">
                        <textPath href="#arcPathBottom" startOffset="50%">
                            JEOPARDY?
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* <h1 className='start-title'>JEOPARDY</h1> */}
            {/* <img className="jeopardy-name" src={jeopardyName} alt="jeopardy" /> */}
            <div className="btn-start-container">
                <button className="btn btn-startpage" onClick={goToGameSettings}>Play Game</button>
                <button className="btn btn-startpage" onClick={goToInstructions}>Instructions</button>
            </div>
            <div className="start-extra-container">
                <p className="btn-to-attribution" onClick={goToAttributions} >Attribution</p>
                <p className="tips">Press <kbd>F11</kbd> for full-screen mode</p>
            </div>
        </div>
    );
}

