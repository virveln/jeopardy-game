import "../App.css";
import '../styles/showQA.css';
import jeopardyLogo from '../images/jeopardy.gif';
import PlayersBtnQ from "./PlayersBtnQ";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowQuestion({ question, toAnswer, players, updatePlayerScore }) {

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            toAnswer();
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
            <div className="question-content border-shine">
                {/*<h4 className="category-level">{question.category} - {question.value}p</h4>*/}
                <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
            </div>
            <div className="answer-nextbtn-container">

                <PlayersBtnQ
                    players={players}
                    questionValue={question.value}
                    updatePlayerScore={updatePlayerScore}
                // onDone={onBack}
                />
                <button className="btn btn-question" onClick={toAnswer}><FaArrowRightLong /></button>
            </div>
        </div>
    )

}