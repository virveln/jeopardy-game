import "../App.css";
import '../styles/showQA.css';
import PlayersAnswer from "./PlayersAnswer";
import jeopardyLogo from '../images/jeopardy.gif';
import { useState } from "react";

export default function ShowAnswer({ question, onBack, players, updatePlayerScore }) {
    const [imageClass, setImageClass] = useState("");

    return (
        <div className="background-game">
            <img src={jeopardyLogo} alt="jeopardy" className="gif" />
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
            <PlayersAnswer
                players={players}
                questionValue={question.value}
                updatePlayerScore={updatePlayerScore}
                // onDone={onBack}
            />
             <button className="btn btn-answer-page" onClick={onBack}>
                Back to Gameboard
            </button>
        </div>
    )
}