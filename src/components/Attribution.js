import "../App.css";
import '../styles/attribution.css';
import React, { useEffect } from "react";

export default function Attribution({ backToStart }) {
   
    const handleKeyPress = (e) => {
        if (e.key === "Enter" | e.key === "Escape") {
            backToStart();
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
        <div className="attribution-page background-game">
            <div className="attribution-content">
                <h2 className="title-position">Attributions</h2>
                <ul>
                    <li>Startpage background image from Jeopardy!</li>
                    <li>Background image <a href="http://www.freepik.com">designed by Freepik</a></li>
                    <li>Game concept and name from Jeopardy!, design made by Jessica Hvirfvel</li>
                </ul>
            </div>
            <button className="btn btn-attribution" onClick={backToStart}>
                Back to Start
            </button>
        </div>
    );
}

