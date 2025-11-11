import "../App.css";
import '../styles/gameboard.css';
import { useState, useEffect, useRef } from "react";

import swooshSound from '../audio/category-intro1.mp3';

export default function Gameboard({ selectedCells, setSelectedCells, handleQuestionSelection, goToScoreboard, theme, hasAnimated, setHasAnimated, setAllCellsPlayed, setClickedButtons, categoryAudioUnlocked }) {
    const [data, setData] = useState([]);
    const categoryAudioRef = useRef(null);
    const AUDIO_INITIAL_DELAY = 400; // in milliseconds, adjust as needed
    const AUDIO_CATEGORY_DELAY = 400; // 400ms between each category
    const ANIMATION_INITIAL_DELAY = 0.4; // in seconds (e.g., 0.8s)
    const ANIMATION_CATEGORY_DELAY = 0.4; // stagger between categories

    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    // Control for animation so it doesnt run again
    useEffect(() => {
        setClickedButtons([]);

        console.log("selectedcells: " + selectedCells.length);
        console.log("hasanimated: " + hasAnimated);
        if (selectedCells.length !== 0) {
            //setHasAnimated(true);
        }

        if (selectedCells.length === 25) setAllCellsPlayed(true);
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

    useEffect(() => {
        // Preload sound for instant playback
        categoryAudioRef.current = new Audio(swooshSound);
        categoryAudioRef.current.load();
    }, []);

    // Sound effect
    useEffect(() => {
        if (data.length === 0 || hasAnimated || !categoryAudioUnlocked) return;
        console.log("spelar ljud" + hasAnimated);



        data.forEach((_, index) => {
            setTimeout(() => {
                if (categoryAudioRef.current) {
                    const clone = categoryAudioRef.current.cloneNode();
                    clone.currentTime = 0;
                    clone.play().catch(err => console.warn("Audio play failed:", err));
                }
            }, AUDIO_INITIAL_DELAY + index * AUDIO_CATEGORY_DELAY);
        });

        const totalDelay = AUDIO_INITIAL_DELAY + (data.length - 1) * AUDIO_CATEGORY_DELAY + 100; // extra 100ms buffer
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, totalDelay);

        return () => clearTimeout(timer);

    }, [data, hasAnimated, categoryAudioUnlocked]);

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
                                <th key={categoryIndex} className={`category ${hasAnimated ? '' : 'animate'}`}>
                                    <span style={{ animationDelay: `${ANIMATION_INITIAL_DELAY + categoryIndex * ANIMATION_CATEGORY_DELAY}s` }}>
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
                                            <span style={{ animationDelay: `${ANIMATION_INITIAL_DELAY + colIndex * ANIMATION_CATEGORY_DELAY}s` }}>
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