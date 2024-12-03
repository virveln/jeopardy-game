import "../App.css";
import '../styles/instructions.css';
import React, { useEffect } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";


export default function Instructions({ openAllAnswers, backToStart }) {

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
        <div className="instruction-page background-game">
            <div className="instruction-content">
                <h2 className="title-position">Instructions</h2>
                <p>Spelet är likt konceptet Jeopardy! och går ut på att lekledaren säger svaren och deltagarna ställer frågorna. <a className="all-answers-link" onClick={openAllAnswers}>Alla svar<RxOpenInNewWindow /></a></p>

                <table className="instruction-table">
                    <tbody>
                        <tr>
                            <td className="left">Buzzer:</td>
                            <td>Tips kan vara att använda någon form av buzzer för att avgöra vilken spelare/lag som ska svara först. Ex. <a className="all-answers-link" href="https://www.multibuzz.app/" target="_blank">multibuzz.app</a>.</td>
                        </tr>
                        <tr>
                            <td className="left">Spelare:</td>
                            <td>Börja med att lägga till minst 2 spelare/lag och ge dem namn.</td>
                        </tr>
                        <tr>
                            <td className="left">Tema:</td>
                            <td>Temat utgör tillhörande 5 kategorier med frågor.</td>
                        </tr>
                        <tr>
                            <td className="left">Fråga:</td>
                            <td>När spelet börjar, kan frågor väljas från spelplanen där varje fråga är förknippad med ett specifikt värde (100–500 poäng).</td>
                        </tr>
                        <tr>
                            <td className="left">Svara:</td>
                            <td>
                                Först efter att lekledaren har sagt 'svaret' får spelarna buzza för att svara med en 'fråga'.
                                Det är viktigt att spelarnas svar ställs som en fråga "Vad är..", "Vem är.." osv. Har en spelare buzzat måste spelaren svara. Lekledaren kan <a className="all-answers-link" onClick={openAllAnswers}>kontrollera svaren<RxOpenInNewWindow /></a> på separat skärm.
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Poäng:</td>
                            <td>
                                Om en spelare svarar rätt, får de poäng motsvarande frågans värde.
                                Om de svarar fel, blir det minuspoäng motsvarande frågans värde och nästa spelare får en chans att svara.
                            </td>
                        </tr>
                        <tr>
                            <td className="left">Vinnare:</td>
                            <td>Den spelare/lag med flest poäng när alla frågor har besvarats vinner.</td>
                        </tr>
                    </tbody>
                </table>

                <table className="control-table">
                    <tbody>
                        <tr>
                            <td className="left">[ Ctrl + piltangent ]:</td>
                            <td>Växlar mellan tema</td>
                        </tr>
                        <tr>
                            <td className="left">[ Ctrl + Enter ]:</td>
                            <td>Startar spel</td>
                        </tr>
                        <tr>
                            <td className="left">[ Enter ]:</td>
                            <td>Går vidare till svar och tillbaka till spelplanen</td>
                        </tr>
                        <tr>
                            <td className="left">[ S ]:</td>
                            <td>Visar scoreboard och tillbaka till spelplanen</td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-instructions-container">
                <button className="btn btn-instructions" onClick={backToStart}>Back to Start</button>
                </div>
            </div>
        </div>
    );
}

