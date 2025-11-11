import "../App.css";
import '../styles/gameSettings.css';
import { useState, useEffect, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function GameSettings({ startGame, setPlayers, setTheme, themes, backToStart }) {
    const [playerName, setPlayerName] = useState('');
    const [playersList, setPlayersList] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState('allmant');
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(1);
    const inputRef = useRef(null);
    const startGameBtnRef = useRef(null);

    // Focus on input field
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Shortcuts
    const handleKeyPress = (e) => {
        // Click on Start Game button when using ctrl/command + enter
        if (e.key === " " && e.ctrlKey || e.key === " " && e.metaKey) {
            if (startGameBtnRef.current) {
                startGameBtnRef.current.click();
            }
        }
        if (e.key === "Escape") {
            backToStart();
        }

        if (e.ctrlKey || e.metaKey) {
            if (e.key === "ArrowRight") {
                setSelectedThemeIndex((prevIndex) => (prevIndex % themes.length) + 1);
            } else if (e.key === "ArrowLeft") {
                setSelectedThemeIndex((prevIndex) => (prevIndex - 2 + themes.length) % themes.length + 1);
            }
        }
    };

    // When selectedThemeIndex is changed (for shortcut)
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
    }, []);

    // Inputfield npt more than 20 characters
    const handleInputChange = (e) => {
        if (e.target.value.length <= 20) {
            setPlayerName(e.target.value);  // Uppdatera playerName om den är inom gränsen
        } else {
            // alert("Player name cannot be longer than 15 characters.");
            alert("Spelarnamn kan inte vara längre än 20 tecken.");
        }
    };

    const handleAddPlayer = () => {
        //Controls id player name is empty
        if (playerName.trim() === '') {
            // alert('Player name cannot be empty. Add name.');
            alert('Spelarnamn kan inte vara tomt. Lägg till spelarnamn.');
            return;
        }

        // Controls if player name already exists (case-insensitive)
        const isDuplicate = playersList.some((player) => player.name.toLowerCase() === playerName.trim().toLowerCase());
        if (isDuplicate) {
            // alert('Player name already exists. Add new name.');
            alert('Spelarnamn finns redan. Lägg till ett nytt.');
            return;
        }

        // Add player
        setPlayersList([...playersList, { name: playerName, score: 0 }]);
        setPlayerName('');
        inputRef.current.focus();
    };

    const handleStartGame = () => {
        //If no players is added
        if (playersList.length === 0) {
            // alert('You need to add at least one player to start the game.');
            alert('Du måste lägga till minst en spelare för att kunna spela.');
            return;
        }
        setPlayers(playersList);
        setTheme(selectedTheme);
        startGame();
    };


    return (
        <div className="add-players-container">
            <div className="add-players-content">
                <div className="add-players-inner">

                    {/* Heading Animation */}
                    <motion.h2
                        className="title-position"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Add Players
                    </motion.h2>

                    {/* Input Field Animation */}
                    <motion.div
                        className="input-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={playerName}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.ctrlKey) handleAddPlayer();
                            }}
                            placeholder="Enter player name"
                            className="input-name"
                        />
                        <button className="input-btn" onClick={handleAddPlayer}>
                            <IoIosAddCircleOutline />
                        </button>
                    </motion.div>

                    {/* Players List (appears next) */}
                    <motion.div
                        className="players-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <ul>
                            {playersList.map((player, index) => (
                                <li key={index}>{player.name}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Theme Selector Animation */}
                <motion.div
                    className="theme-selector"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="title-theme">Select Theme</h2>
                    <div className="theme-buttons">
                        {themes.map((theme, i) => (
                            <motion.button
                                id={`btn-theme-${theme.value}`}
                                key={theme.value}
                                className={`theme-button ${selectedTheme === theme.value ? "active" : ""
                                    }`}
                                onClick={() => setSelectedTheme(theme.value)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                            
                            >
                                <span className="theme-thumbnail">
                                    {typeof theme.thumbnail === "string" ? (
                                        <img
                                            src={theme.thumbnail}
                                            alt={theme.label}
                                            className="svg-img"
                                        />
                                    ) : (
                                        <theme.thumbnail className="svg-img" />
                                    )}
                                </span>
                                <h4 className="theme-label">{theme.label}</h4>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div >

            {/* Static Buttons (no animation) */}
            < button
                ref={startGameBtnRef}
                className="btn start-game-btn"
                onClick={handleStartGame}
            >
                Start Game
            </button >
            <button className="btn btn-arrow btn-top" onClick={backToStart}>
                <FaArrowLeftLong />
            </button>
        </div >
    );
}

