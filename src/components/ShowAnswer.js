import "../App.css";
import '../styles/showQA.css';
import PlayersBtnAnswer from "./PlayersBtnAnswer";
import jeopardyLogo from '../images/jeopardy.gif';
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowAnswer({ question, backToGameboard, players, updatePlayerScore }) {
    const [imageClass, setImageClass] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            backToGameboard();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="background-game">
            {/* <img src={jeopardyLogo} alt="jeopardy" className="gif" /> */}
            <h1 id="sub-title" className="title-position">{question.category} - {question.value}p</h1>
            <div className="answer-content border-shine">
                <h3 dangerouslySetInnerHTML={{ __html: question.answer }} />
                <img
                    src={question.image}
                    alt="question"
                    title={question.imageSource}
                    className={`question-image ${imageClass}`}
                    onLoad={(e) => {
                        const { naturalWidth, naturalHeight } = e.target;
                        setImageClass(naturalHeight > naturalWidth ? "portrait-img" : "landscape-img");
                    }} />
            </div>
            <div className="answer-nextbtn-container">
                <PlayersBtnAnswer
                    players={players}
                    questionValue={question.value}
                    updatePlayerScore={updatePlayerScore}
                    whichPage={"answer"}
                />
                <button className="btn btn-arrow btn-answer-page" onClick={backToGameboard}>
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    )
}