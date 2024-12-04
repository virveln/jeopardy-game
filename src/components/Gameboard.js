import "../App.css";
import '../styles/gameboard.css';
import { useState, useEffect } from "react";
import jeopardyLogo from '../images/jeopardy.gif';

export default function Gameboard({ selectedCells, setSelectedCells, handleQuestionSelection, goToScoreboard, theme }) {
    const [data, setData] = useState([]);

    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    // Set witch question was clicked
    const handleQuestionClick = (categoryIndex, level) => {
        const category = data[categoryIndex];
        const question = category.questions.find(q => q.level === level);

        // Saves clicked cell
        const cellKey = `${categoryIndex}-${level}`;
        if (!selectedCells.includes(cellKey)) {
            setSelectedCells(prevSelectedCells => [...prevSelectedCells, cellKey]);
        }
        handleQuestionSelection(category, question);
    };

    const handleKeyPress = (e) => {
        if (e.key === "s" | e.key === "S") {
            goToScoreboard();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="background-game">
            {/* <img src={jeopardyLogo} alt="jeopardy" className="gif" /> */}
            <h1 className="sub-title title-position">{data[0]?.label}</h1>
            <div className="board border-shine">
                {/* Category names on top */}
                {data.map((category, categoryIndex) => (
                    <div key={categoryIndex}
                        className="category"
                    >
                        {category.category}
                    </div>
                ))}
                {/* All questions in every category renders in following rows */}
                {data.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="questions-row">
                        {[100, 200, 300, 400, 500].map((level) => {
                            const cellKey = `${categoryIndex}-${level}`;
                            const isSelected = selectedCells.includes(cellKey);
                            const handleKeyPressCell = (e) => {
                                if (e.key === 'Enter' && !isSelected) {
                                    handleQuestionClick(categoryIndex, level);
                                }
                            };

                            return (
                                <div
                                    key={cellKey}
                                    className={`cell ${isSelected ? 'selected' : ''}`}
                                    tabIndex={!isSelected ? 0 : -1}
                                    onClick={!isSelected ? () => handleQuestionClick(categoryIndex, level) : undefined}  // När man klickar på en fråga
                                    onKeyDown={handleKeyPressCell}
                                    role="button" 
                                    aria-disabled={isSelected}
                                >
                                    {level}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <button id='scoreboard-btn' className="btn" onClick={goToScoreboard}>Scoreboard</button>
        </div>
    )
}