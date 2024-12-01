import "../App.css";
import '../styles/attribution.css';

export default function Attribution({ backToStart }) {
    return (
        <div className="attribution-page background-game">
            <div className="attribution-content">
                <h2 className="title-position">Attributions</h2>
                <ul>
                    <li>Startpage background image from Jeopardy!</li>
                    <li>Background image <a href="http://www.freepik.com">designed by Freepik</a></li>
                </ul>
            </div>
            <button className="btn btn-attribution" onClick={backToStart}>
                Back to Start
            </button>
        </div>
    );
}

