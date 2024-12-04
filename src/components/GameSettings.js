import "../App.css";
import '../styles/gameSettings.css';
import { useState, useEffect, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import jeopardyLogo from '../images/jeopardy.gif';
import allmantThumbnail from '../images/allmanbildning/thumbnail.jpeg';
import julThumbnail from '../images/jul/thumbnail.jpeg';
import nyår2024Thumbnail from '../images/nyår2024/thumbnail.jpeg';
import nyår2025Thumbnail from '../images/nyår2025/thumbnail.jpeg';

export default function GameSettings({ startGame, setPlayers, setTheme }) {
    const [playerName, setPlayerName] = useState('');
    const [playersList, setPlayersList] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState('allmant');
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(1);
    const inputRef = useRef(null);

    const themes = [
        { value: 'allmant', label: 'Allmänt', thumbnail: allmantThumbnail },
        { value: 'jul', label: 'Jul', thumbnail: julThumbnail },
        { value: 'nyår2024', label: 'Nyår 2024', thumbnail: nyår2024Thumbnail },
        // { value: 'nyår2025', label: 'Nyår 2025', thumbnail: nyår2025Thumbnail },
    ];

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleAddPlayer = () => {
        //Controls id player name is empty
        if (playerName.trim() === '') {
            alert('Player name cannot be empty. Add name.');
            return;
        }

        // Controls if player name already exists (case-insensitive)
        const isDuplicate = playersList.some((player) => player.name.toLowerCase() === playerName.trim().toLowerCase());
        if (isDuplicate) {
            alert('Player name already exists. Add new name.');
            return;
        }

        // Add player
        setPlayersList([...playersList, { name: playerName, score: 0 }]);
        setPlayerName('');
    };

    const handleStartGame = () => {
        //If no players is added
        if (playersList.length === 0) {
            alert('You need to add at least one player to start the game.');
            return;
        }
        setPlayers(playersList); 
        setTheme(selectedTheme);
        startGame(); 
    };
    const handleInputPress = (e) => {
        if (e.key === "Enter" && !e.ctrlKey) {
            handleAddPlayer();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            handleStartGame();
        }
        if (e.ctrlKey) {
            if (e.key === "ArrowRight") {
                setSelectedThemeIndex((prevIndex) => (prevIndex % themes.length) + 1);
            } else if (e.key === "ArrowLeft") {
                setSelectedThemeIndex((prevIndex) => (prevIndex - 2 + themes.length) % themes.length + 1);
            }
        }
    };

    // When selectedThemeIndex is changed
    useEffect(() => {
        const selectedTheme = themes[selectedThemeIndex - 1]; // -1 för 1-indexering
        if (selectedTheme) {
            const button = document.getElementById(`btn-theme-${selectedTheme.value}`);
            if (button) { button.click(); }
        }
    }, [selectedThemeIndex]); 
    

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [themes]);

    return (
        <div className="add-players-container ">
            <div className="add-players-content">
                {/* <img src={jeopardyLogo} alt="jeopardy" className="gif" /> */}
                <div className="add-players-inner">
                    <h2 className="title-position">Add Players</h2>
                    <div className="input-container">
                        <input
                            ref={inputRef}
                            type="text"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            onKeyDown={handleInputPress}
                            placeholder="Enter player name"
                            className="input-name"
                        />
                        <button className="input-btn" onClick={handleAddPlayer}><IoIosAddCircleOutline /></button>
                    </div>

                    <div className="players-list">
                        <ul>
                            {playersList.map((player, index) => (
                                <li key={index}>{player.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Temaval */}
                <div className="theme-selector">
                    <h2 className="title-theme">Select Theme</h2>
                    <div className="theme-buttons">
                        {themes.map((theme) => (
                            <button
                                id={`btn-theme-${theme.value}`}
                                key={theme.value}
                                className={`theme-button ${selectedTheme === theme.value ? 'active' : ''}`}
                                onClick={() => setSelectedTheme(theme.value)}
                            >
                                <img src={theme.thumbnail} alt={theme.label} className="theme-thumbnail" />
                                <span>{theme.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className="btn start-game-btn"
                onClick={handleStartGame}>
                Start Game
            </button>
        </div>
    );
}

