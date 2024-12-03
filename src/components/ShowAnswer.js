import "../App.css";
import '../styles/showQA.css';
import PlayersBtnA from "./PlayersBtnA";
import jeopardyLogo from '../images/jeopardy.gif';
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowAnswer({ question, onBack, players, updatePlayerScore }) {
    const [imageClass, setImageClass] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onBack();
        }
    };

    useEffect(() => {
        // Lägg till event listener för tangenttryck
        window.addEventListener("keydown", handleKeyPress);

        // Rensa event listener vid unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []); // Körs endast en gång vid montering

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
            <div className="answer-nextbtn-container">
                <PlayersBtnA
                    players={players}
                    questionValue={question.value}
                    updatePlayerScore={updatePlayerScore}
                // onDone={onBack}
                />
                <button className="btn btn-answer-page" onClick={onBack}>
                    <FaArrowRightLong />
                </button>

            </div>
        </div>
    )
}