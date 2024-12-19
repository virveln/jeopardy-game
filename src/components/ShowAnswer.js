import "../App.css";
import '../styles/showQA.css';
import PlayersBtnQA from "./PlayersBtnQA";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowAnswer({ question, backToGameboard, players, updatePlayerScore }) {
    const [imageClass, setImageClass] = useState("");

    // Shortcut
    const handleKeyPress = (e) => {
        if (e.key === " ") {
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
            <h1 id="sub-title" className="title-position">{question.category} - {question.value}p</h1>
            <div className={`answer-content border-shine ${question.image ? "answer-grid" : ""}`}>
                {question.image ? (
                    <>
                        <h3 className="fade-in-QA" dangerouslySetInnerHTML={{ __html: question.answer }} />
                        <img
                            src={question.image}
                            alt="Bild som representerar svaret"
                            title={question.imageSource}
                            className={`fade-in-QA question-image ${imageClass}`}
                            onLoad={(e) => {
                                const { naturalWidth, naturalHeight } = e.target;
                                setImageClass(naturalHeight > naturalWidth ? "portrait-img" : "landscape-img");
                            }}
                        />
                    </>
                ) : (
                    <h3 className="centered-text" dangerouslySetInnerHTML={{ __html: question.answer }} />
                )}
            </div>
            <div className="answer-nextbtn-container">
                <PlayersBtnQA
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