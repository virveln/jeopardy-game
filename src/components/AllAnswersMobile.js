// Mobile version

import '../styles/allAnswers.css';
import React, { useState, useEffect } from 'react';

export default function AllAnswers({ allThemes }) {
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
            <h1>Jeopardy Answers</h1>
            {/* Dropdown för att välja tema */}
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="theme-selector">
                {allThemes.map((theme) => (
                    <option value={theme.value}>{theme.label}</option>
                ))}
            </select>

            {data.length > 0 ? (
                <div className="answers-table-container">
                    {data.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="answer-category">
                            <h3>{category.category}</h3>
                            <table className="answers-table">
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        {/* <th>Value</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.questions.map((q) => (
                                        <tr key={q.id}>
                                            <td dangerouslySetInnerHTML={{ __html: q.question }}></td>
                                            <td dangerouslySetInnerHTML={{ __html: q.answer }}></td>
                                            {/* <td>{q.level}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading theme data...</p>
            )}
        </div>
    );
}
