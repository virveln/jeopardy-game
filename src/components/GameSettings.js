import "../App.css";
import '../styles/gameSettings.css';
import { useState, useEffect, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import jeopardyLogo from '../images/jeopardy.gif';
import nyår2024Thumbnail from '../images/nyår2024/thumbnail.jpeg';
import nyår2025Thumbnail from '../images/nyår2025/thumbnail.jpeg';
import allmantThumbnail from '../images/allmanbildning/thumbnail.jpeg';
import julThumbnail from '../images/jul/thumbnail.jpeg';

export default function AddPlayers({ onStart, setPlayers, setTheme }) {
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

    const handleEnterPress = (e) => {
        if (e.key === "Enter" && !e.ctrlKey) {
            handleAddPlayer();
        }
    };

    const handleAddPlayer = () => {
        if (playerName.trim() === '') {
            alert('Player name cannot be empty!');
            return;
        }

        // Kontrollera om spelarnamnet redan finns i listan (case-insensitive)
        const isDuplicate = playersList.some(
            (player) => player.name.toLowerCase() === playerName.trim().toLowerCase()
        );

        if (isDuplicate) {
            alert('Player name already exists!');
            return;
        }

        // Lägg till spelaren till listan
        setPlayersList([...playersList, { name: playerName, score: 0 }]);
        setPlayerName(''); // Rensa inputfältet
    };

    const handleStartGame = () => {
        if (playersList.length === 0) {
            alert('You need to add at least one player to start the game!');
            return;
        }
        setPlayers(playersList);  // Uppdatera huvudspelare-lista i App.js
        setTheme(selectedTheme);
        onStart();  // Starta spelet och gå vidare till Gameboard
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            handleStartGame();
        }
    //     else if (e.key === "ArrowRight" && e.ctrlKey) {
    //         // Öka indexet och loopa runt till 1 om det går över längden
    //         setSelectedThemeIndex((selectedThemeIndex % themes.length) + 1);
    //     } else if (e.key === "ArrowLeft" && e.ctrlKey) {
    //         // Minska indexet och loopa runt till max längd om det går under 1
    //         setSelectedThemeIndex((selectedThemeIndex - 2 + themes.length) % themes.length + 1);
    //     }
        
    //     const selectedTheme = themes.find((theme, index) => index + 1 === selectedThemeIndex);
    // if (selectedTheme) {
    //     const button = document.getElementById(`btn-theme-${selectedTheme.value}`);
    //     if (button) {
    //         button.click(); // Trigga knappens click-event
    //     }
    // }

    };

    useEffect(() => {
        // Lägg till event listener för tangenttryck
        window.addEventListener("keydown", handleKeyPress);

        // Rensa event listener vid unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [themes]); // Körs endast en gång vid montering

    return (
        <div className="add-players-container ">
            <div className="add-players-content">
                <img src={jeopardyLogo} alt="jeopardy" className="gif" />
                <div className="add-players-inner">
                    <h2 className="title-position">Add Players</h2>
                    <div className="input-container">
                        <input
                            ref={inputRef}
                            type="text"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            onKeyDown={handleEnterPress}
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

