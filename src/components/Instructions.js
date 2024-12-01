import "../App.css";
import '../styles/instructions.css';

export default function Instructions({ openAllAnswers, backToStart }) {
    return (
        <div className="attribution-page background-game">
            <div className="attribution-content">
                <h2 className="title-position">Instructions</h2>
                <a onClick={openAllAnswers}>All answers</a>

            </div>
            <button className="btn btn-attribution" onClick={backToStart}>
                Back to Start
            </button>
        </div>
    );
}

