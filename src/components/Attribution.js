import "../App.css";
import '../styles/attribution.css';
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Attribution({ backToStart }) {
   
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            backToStart();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);
   
    return (
        <div className="attribution-page background-game">
            <div className="attribution-content">
                <h2 className="title-position">Attributions</h2>
                <ul>
                    {/* <li>Startpage background image from Jeopardy!</li> */}
                    <li>Background images <a href="http://www.freepik.com">designed by Freepik</a></li>
                    <li>Sound Effect by <a href="https://pixabay.com/users/u_a5z4rtk6yn-49881965/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=331225">u_a5z4rtk6yn</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=331225">Pixabay</a></li>
                    <li>Sound Effect by <a href="https://pixabay.com/users/u_n2rdb8hxnh-48483999/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=293358">u_n2rdb8hxnh</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=293358">Pixabay</a></li>
                    {/* Eventuell swoosh */}<li>Sound Effect by <a href="https://pixabay.com/users/dheerajakam4jor-36410348/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=149889">Dheeraj M4JOR</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=149889">Pixabay</a></li>
                    {/* Eventuell swoosh */}<li>Sound Effect by <a href="https://pixabay.com/users/dheerajakam4jor-36410348/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=149888">Dheeraj M4JOR</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=149888">Pixabay</a></li>
                    <li>Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6185">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6185">Pixabay</a></li>
                    <li>Game concept insired by Jeopardy!, design made by Jessica Hvirfvel</li>
                </ul>
            </div>
            <button className="btn btn-arrow btn-attribution btn-top" onClick={backToStart}>
                <FaArrowLeftLong/>
            </button>
        </div>
    );
}

