import "../App.css";
import '../styles/gameboard.css';
import { useState, useEffect } from "react";
import data from "../data/nyår2024";
import jeopardyLogo from '../images/jeopardy.gif';

export default function Gameboard({ selectedCells, setSelectedCells, onSelectQuestion, onGoToScoreboard, theme }) {
    const [data, setData] = useState([]);
    
    // Ladda data baserat på temat
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    //Set witch question was clicked
    const handleQuestionClick = (categoryIndex, level) => {
        const category = data[categoryIndex];
        const question = category.questions.find(q => q.level === level);

        //spara klickad cell
        const cellKey = `${categoryIndex}-${level}`;
        if (!selectedCells.includes(cellKey)) {
            setSelectedCells(prevSelectedCells => [...prevSelectedCells, cellKey]);
        }

        onSelectQuestion(category, question);
    };

    const handleKeyPress = (e) => {
        if (e.key === "s" | e.key === "S" ) {
            onGoToScoreboard();
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
        <>

            <div className="background-game">
                <img src={jeopardyLogo} alt="jeopardy" className="gif" />
                <h1 className="sub-title title-position">{data[0]?.label}</h1>
                <div className="board border-shine">
                    {/* Kategorinamn renderas som översta raden */}
                    {data.map((category, categoryIndex) => (
                        <div key={categoryIndex}
                            className="category"
                        >
                            {category.category}
                        </div>
                    ))}

                    {/* Alla frågor i varje kategori renderas i de följande raderna */}
                    {data.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="questions-row">
                            {[100, 200, 300, 400, 500].map((level) => {
                                const cellKey = `${categoryIndex}-${level}`;
                                const isSelected = selectedCells.includes(cellKey);// Kolla om cellen är vald


                                return (
                                    <div
                                        key={cellKey}
                                        className={`cell ${isSelected ? 'selected' : ''}`}
                                        onClick={!isSelected ? () => handleQuestionClick(categoryIndex, level) : undefined}  // När man klickar på en fråga
                                    >
                                        {level}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <button id='scoreboard-btn' className="btn" onClick={onGoToScoreboard}>Scoreboard</button>
            </div>
        </>

    )
}