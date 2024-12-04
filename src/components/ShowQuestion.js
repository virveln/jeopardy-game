import "../App.css";
import '../styles/showQA.css';
import jeopardyLogo from '../images/jeopardy.gif';
import PlayersBtnAnswer from "./PlayersBtnAnswer";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowQuestion({ question, goToAnswer, players, updatePlayerScore }) {

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            goToAnswer();
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
            <div className="question-content border-shine">
                <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
            </div>
            <div className="answer-nextbtn-container">
                <PlayersBtnAnswer
                    players={players}
                    questionValue={question.value}
                    updatePlayerScore={updatePlayerScore}
                    whichPage={"question"}
                />
                <button className="btn btn-arrow btn-question" onClick={goToAnswer}><FaArrowRightLong /></button>
            </div>
        </div>
    )

}