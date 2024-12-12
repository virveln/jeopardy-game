import "../App.css";
import '../styles/scoreboard.css';
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import PlayerScore from "./PlayerScore";

export default function Scoreboard({ players, backToGameboard, theme, setHasAnimated }) {
    const [data, setData] = useState([]);
    
    // Load data based on theme
    useEffect(() => {
        import(`../data/${theme}.js`)
            .then((module) => setData(module.default))
            .catch((err) => console.error("Failed to load theme data:", err));
    }, [theme]);

    // Shortcuts
    const handleKeyPress = (e) => {
        if (e.key === "Enter" | e.key === "Escape") {
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

    // const [visiblePlayers, setVisiblePlayers] = useState([]);

    // useEffect(() => {
    //     setVisiblePlayers([]); 
    //     let timers = [];
    //     players.forEach((player, index) => {
    //         const timer = setTimeout(() => {
    //             setVisiblePlayers((prev) => [...prev, player]);
    //         }, index * 500); // 500ms between each player
    //         timers.push(timer);
    //     });
    //     return () => timers.forEach(clearTimeout); // Clear all timers via unmount
    // }, [players]);

    return (
        <div className="background-scoreboard scoreboard">
            <h2 id="sub-title" className="scoreboard-subtitle title-position">{data[0]?.label}</h2>
            <PlayerScore
                players={players}
            />
            <div className="btn-scoreboard-container btn-top">
                <button className="btn btn-arrow btn-scoreboard" onClick={backToGameboard}>
                    <FaArrowLeftLong />
                </button>
            </div>
        </div>
    );
}