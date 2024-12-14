import "../App.css";
import '../styles/playerScore.css';
import { HiMiniTrophy } from "react-icons/hi2";

export default function PlayerScore({ players }) {
    const rankedPlayers = {};

    // Sort all players by score, from top
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

    // Rank and score
    let rank = 1;
    let currentScore = null;
    let rankCount = 0;

    sortedPlayers.forEach((player, index) => {
        // Control if new score
        if (player.score !== currentScore) {
            // Update rank only if theres a new score
            rank = index + 1;
            rankCount++;
            currentScore = player.score;
        }
        // Tilldela rank för spelaren om de är inom topp 3
        rankedPlayers[player.name] = rankCount <= 3 ? rankCount : null;
    });

    return (
        <div className="player-score-container">
            {players.map((player) => {
                // Set className based on rank 
                const rank = rankedPlayers[player.name];
                let rankClass = "";
                if (rank === 1) rankClass = "first-place";
                else if (rank === 2) rankClass = "second-place";
                else if (rank === 3) rankClass = "third-place";
                else if (rank >= 4) rankClass = "";
                // Calculate animation delay 
                const animationDelay = rank
                ? `${rank === 1 ? 0.1 : rank * 0.5}s` // Första plats får 0.25s, resten 0.75s intervall
                : `${(sortedPlayers.indexOf(player) + 1) * 0.5}s`; // Spelare utan rank får 0.75s intervall efter rankade
            // const animationDelay = `${(sortedPlayers.indexOf(player)) * 0.75}s`;

            
                return (
                    <div
                        className={`player-score-content border-shine ${rankClass}`}
                        key={player.name}
                        style={{ animationDelay: animationDelay, }}
                    >                        
                    <p className="score-value">{player.score}p</p>
                        <hr className="line" />
                        <h3 className="score-name">{player.name}</h3>
                        <HiMiniTrophy className={`trophy ${rankClass}`} />
                    </div>
                );
            })}
        </div>
    );
}
