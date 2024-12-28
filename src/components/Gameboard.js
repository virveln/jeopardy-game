import "../App.css";
import '../styles/gameboard.css';
import { useState, useEffect, useRef } from "react";

export default function Gameboard({ selectedCells, setSelectedCells, handleQuestionSelection, goToScoreboard, theme, hasAnimated, setHasAnimated, setAllCellsPlayed, setClickedButtons }) {
    const [data, setData] = useState([]);

    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    // Control for animation so it doesnt run again
    useEffect(() => {
        setClickedButtons([]);

        // console.log(selectedCells);
        if(selectedCells.length !== 0 ){
            setHasAnimated(true);
        }

        // const timer = setTimeout(() => {
        //     setHasAnimated(true);
        // }, 3000);
        // return () => clearTimeout(timer);

        if(selectedCells.length === 25) setAllCellsPlayed(true);
    }, []);

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

    // Shortcuts
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

    // Able to tab column based and at end focus on button
    const numRows = data[0]?.questions.length || 0;
    const buttonRef = useRef(null);
    // Find next tab index
    const getNextTabbableCell = (currentTabIndex, shiftKey) => {
        const flatTabIndices = Array.from(document.querySelectorAll('[tabindex]'))
            .map((el) => parseInt(el.tabIndex, 10))
            .filter((index) => index >= 0)
            .sort((a, b) => a - b);
        const currentIndex = flatTabIndices.indexOf(currentTabIndex);
        if (shiftKey) {
            // Tab backwards
            return flatTabIndices[(currentIndex - 1 + flatTabIndices.length) % flatTabIndices.length];
        }
        // Tab forward
        if (currentIndex === flatTabIndices.length - 1) {
            return "button"; // Go to button if its on the last cell
        }
        return flatTabIndices[(currentIndex + 1) % flatTabIndices.length];
    };

    return (
        <div className="background-game">
            <h1 className="sub-title title-position">{data[0]?.label}</h1>
            <div className="board border-shine">
                <table>
                    <thead>
                        <tr>
                            {/* Category names as heading in table */}
                            {data.map((category, categoryIndex) => (
                                <th
                                    key={categoryIndex}
                                    className={`category ${hasAnimated ? '' : 'animate'}`}>
                                    <span style={{ animationDelay: `${categoryIndex * 0.4}s` }}>
                                        {category.category}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* For each row (level), create a tr with 5 td */}
                        {Array.from({ length: numRows }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* For each category, create a cell (td) */}
                                {data.map((category, colIndex) => {
                                    const question = category.questions[rowIndex]; // Get right question for the level
                                    if (!question) return <td key={`${rowIndex}-${colIndex}`} />; // Leave the cell empty if there's no question 

                                    const cellKey = `${colIndex}-${question.level}`;
                                    const isSelected = selectedCells.includes(cellKey);

                                    // Dynamic tab index: Column based
                                    const tabIndex = !isSelected
                                        ? colIndex * numRows + rowIndex
                                        : -1;

                                    // const handleKeyPressCell = (e) => {
                                    //     if (e.key === 'Enter' && !isSelected) {
                                    //         e.stopPropagation();
                                    //         handleQuestionClick(colIndex, question.level);
                                    //     }
                                    // };

                                    return (
                                        <td
                                            key={cellKey}
                                            className={`cell ${isSelected ? 'selected' : ''} ${hasAnimated ? '' : 'animate'}`}
                                            // tabIndex={!isSelected ? 0 : -1}
                                            tabIndex={tabIndex}
                                            onClick={!isSelected ? () => handleQuestionClick(colIndex, question.level) : undefined}
                                            // onKeyDown={(e) => handleKeyPressCell(e)}
                                            // Tab column based and enter button at end
                                            onKeyDown={(e) => {
                                                if (e.key === 'Tab') {
                                                    e.preventDefault();
                                                    const nextTabIndex = getNextTabbableCell(tabIndex, e.shiftKey);
                                                    if (nextTabIndex === "button") {
                                                        buttonRef.current?.focus();
                                                    } else {
                                                        const nextElement = document.querySelector(`[tabindex="${nextTabIndex}"]`);
                                                        if (nextElement) nextElement.focus();
                                                    }
                                                } else if (e.key === 'Enter' && !isSelected) {
                                                    e.stopPropagation();
                                                    handleQuestionClick(colIndex, question.level);
                                                }
                                            }}
                                            role="button"
                                            aria-disabled={isSelected}
                                        >
                                            <span style={{ animationDelay: `${colIndex * 0.4}s` }}>
                                                {question.level}
                                            </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <button ref={buttonRef} id='scoreboard-btn' className="btn" onClick={goToScoreboard}>Scoreboard</button>
        </div>
    )
}