import "../App.css";
import '../styles/scoreboard.css';
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import PlayerScore from "./PlayerScore";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use'
import successSound from '../audio/success.mp3';


export default function Scoreboard({ players, backToGameboard, theme, allCellsPlayed, setHasAnimated }) {
    const [data, setData] = useState([]);
    const { width, height } = useWindowSize()

    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    // Shortcuts
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            backToGameboard();
        }
    };

    useEffect(() => {
        //Dont animate gameboard again
        setHasAnimated(true);

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    // Play audio when all cells are played
    useEffect(() => {
        if (allCellsPlayed) {
            const audio = new Audio(successSound);
            audio.play().catch((err) => console.error("Audio play failed:", err));
        }
    }, [allCellsPlayed]);

    return (
        <div className="background-scoreboard scoreboard">
            <h2 id="sub-title" className="scoreboard-subtitle title-position">Scoreboard - {data[0]?.label}</h2>
            <PlayerScore
                players={players}
            />
            <div>
                {/* {allCellsPlayed && <Confetti  /> } */}
                {allCellsPlayed && <Confetti width={width - 1} height={height - 1} />}
            </div>
            <div className="btn-scoreboard-container btn-top">
                <button className="btn btn-arrow btn-scoreboard" onClick={backToGameboard}>
                    <FaArrowLeftLong />
                </button>
            </div>
        </div>
    );
}