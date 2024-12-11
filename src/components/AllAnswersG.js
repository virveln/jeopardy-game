import '../styles/allAnswers.css';
import '../styles/gameboard.css';
import { useState, useEffect } from "react";

export default function AllanswersG({ allThemes }) {
    const [theme, setTheme] = useState('allmant');
    const [data, setData] = useState([]);

    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);


    return (
        <div className="background-game all-answers-page">
            <div className='selection-container'>
                <h1>Jeopardy Answers</h1>
                <select value={theme} onChange={(e) => setTheme(e.target.value)} className="theme-selector">
                    {allThemes.map((theme) => (
                        <option value={theme.value}>{theme.label}</option>
                    ))}
                </select>

            </div>
            <div className="board border-shine">
                <table>
                    <thead>
                        <tr>
                            {/* Category names as heading in table */}
                            {data.map((category, categoryIndex) => (
                                <th key={categoryIndex} className="category">
                                    {category.category}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* For each row (level), create a tr with 5 td */}
                        {Array.from({ length: 5 }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* For each category, create a cell (td) */}
                                {data.map((category, colIndex) => {
                                    const question = category.questions[rowIndex]; // Get right question for the level
                            
                                    return (
                                        <td
                                            className="answer-cell"
                                            dangerouslySetInnerHTML={{ __html: question.answer }}
                                            title={`${question.level}: ${question.question}`}
                                        >
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}