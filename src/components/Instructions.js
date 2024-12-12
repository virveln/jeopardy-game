import "../App.css";
import '../styles/instructions.css';
import React, { useEffect } from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Instructions({ openAllAnswers, backToStart }) {

    //Shortcuts
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            backToStart();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="instruction-page background-game">
            <div className="instruction-content">
                <h2 className="title-position">Instructions</h2>
                <div className="border-shine instruction-background">
                    <h3>Hur man spelar</h3>
                    <p>Spelet är likt konceptet Jeopardy! och går ut på att spelledaren säger svaren och spelarna ställer frågorna. Detta är en webbapplikation som inte är anpassad för att spela på en mobil. <a className="all-answers-link" onClick={openAllAnswers}>Alla svar<RxOpenInNewWindow /></a></p>
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
                                    Först efter att spelledaren har sagt 'svaret' får spelarna buzza för att svara med en 'fråga'.
                                    Det är viktigt att spelarnas svar ställs som en fråga "Vad är..", "Vem är.." osv. Har en spelare buzzat måste spelaren svara. Lekledaren kan <a className="all-answers-link" onClick={openAllAnswers}>kontrollera svaren<RxOpenInNewWindow /></a> på separat skärm.
                                </td>
                            </tr>
                            <tr>
                                <td className="left">Poäng:</td>
                                <td>
                                    Om en spelare svarar fel, får de minuspoäng motsvarande frågans värde och andra spelare får en chans att svara (spelledare tilldelar detta på 'frågesidan').
                                    Om en spelare svarar rätt, får de pluspoäng motsvarande frågans värde (spelledare tilldelar detta på 'svarssidan').
                                </td>
                            </tr>
                            <tr>
                                <td className="left">Vinnare:</td>
                                <td>Den spelare/lag med flest poäng när alla frågor har besvarats vinner.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="new-content border-shine instruction-background">
                    <h3>Exempel</h3>
                    <p><b>Spelledarens 'svar': </b>Detta är Sveriges huvudstad.</p>
                    <p><b>Spelarens 'fråga': </b>Vad är Stockholm?</p>
                </div>
                <div className="new-content border-shine instruction-background">
                    <h3>Genvägar</h3>
                    <table className="control-table">
                        <tbody>
                            <tr className="table-margin">
                                <td className="left"><kbd>F11</kbd></td>
                                <td>Helskräm</td>
                            </tr>
                            <tr>
                                <td className="left"><kbd>Enter</kbd></td>
                                <td>Startar spel / Går vidare till starta svar/spelplan</td>
                            </tr>
                            <tr className="table-margin">
                                <td className="left"><kbd>Esc</kbd></td>
                                <td>Tillbaka till föregående</td>
                            </tr>
                            <tr>
                                <td className="left"><kbd>Ctrl</kbd> + <kbd><FaArrowLeftLong/></kbd> / <kbd><FaArrowRightLong/></kbd></td>
                                <td>Växlar mellan teman i spelinställningar</td>
                            </tr>
                            {/* <tr>
                                <td className="left"><kbd>Ctrl</kbd> + <kbd>Enter</kbd></td>
                                <td>Startar spel</td>
                            </tr> */}
                            <tr>
                                <td className="left"><kbd>Tab</kbd></td>
                                <td>Tabbar igenom val av frågor i spelplan</td>
                            </tr>
                            <tr>
                                <td className="left"><kbd>1</kbd> - <kbd>9</kbd></td>
                                <td>För att ge + / - poäng till (max 9) spelare (vänster till höger)</td>
                            </tr>
                            <tr>
                                <td className="left"><kbd>S</kbd></td>
                                <td>Visar scoreboard</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btn-instructions-container btn-top">
                    <button className="btn btn-arrow btn-instructions" onClick={backToStart}><FaArrowLeftLong /></button>
                </div>
            </div>
        </div>
    );
}

