import "../App.css";
import '../styles/startpage.css';
import React, { useEffect } from "react";

export default function StartPage({ enterPlayers, instructions, goToAttributions }) {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            enterPlayers();
        }
        else if (e.key === "a" | e.key === "A") {
            goToAttributions();
        }
        else if (e.key === "i" | e.key === "I") {
            instructions();
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
        <div className="start-page background-start">
            {/* <h1 className='start-title'>NYÅR 2024 EDITION</h1> */}
            <div className="btn-start-container">
                <button className="btn btn-startpage" onClick={enterPlayers}>Play Game</button>
                <button className="btn btn-startpage" onClick={instructions}>Instructions</button>
            </div>
            <p className="btn-to-attribution" onClick={goToAttributions} >Attribution</p>
            <p className="tips">Press F11 for full-screen mode</p>
        </div>
    );
}

