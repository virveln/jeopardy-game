import '../styles/allAnswers.css';
import '../styles/gameboard.css';
import { useState, useEffect } from "react";

export default function AllanswersG({ allThemes }) {
    const [theme, setTheme] = useState('allmant');
    const [data, setData] = useState([]);
    const [clickedCells, setClickedCells] = useState(new Set());


    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    const handleCellClick = (categoryIndex, rowIndex) => {
        const key = `${categoryIndex}-${rowIndex}`;
        setClickedCells(prev => {
            const newSet = new Set(prev);
            if (newSet.has(key)) {
                newSet.delete(key); // un-toggle if clicked again
            } else {
                newSet.add(key); // mark as clicked
            }
            return newSet;
        });
    };



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
                        {Array.from({ length: 5 }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {data.map((category, colIndex) => {
                                    const question = category.questions[rowIndex];
                                    const key = `${colIndex}-${rowIndex}`;
                                    const isClicked = clickedCells.has(key);

                                    return (
                                        <td
                                            key={key}
                                            className="answer-cell"
                                            onClick={() => handleCellClick(colIndex, rowIndex)}
                                            style={{
                                                opacity: isClicked ? 0.1 : 1,
                                                cursor: "pointer",
                                                transition: "opacity 0.3s ease"
                                            }}
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