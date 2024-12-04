import "../App.css";
import '../styles/attribution.css';
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Attribution({ backToStart }) {
   
    const handleKeyPress = (e) => {
        if (e.key === "Enter" | e.key === "Escape") {
            backToStart();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);
   
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
            <button className="btn btn-arrow btn-attribution" onClick={backToStart}>
                <FaArrowLeftLong/>
            </button>
        </div>
    );
}

