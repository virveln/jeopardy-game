import "../App.css";
import '../styles/showQA.css';
import jeopardyLogo from '../images/jeopardy.gif';

export default function ShowQuestion({ question, toAnswer }) {

    return (
        <div className="background-game">
            <img src={jeopardyLogo} alt="jeopardy" className="gif" />
            <h1 id="sub-title" className="title-position">{question.category} - {question.value}p</h1>
            <div className="question-content border-shine">
                {/*<h4 className="category-level">{question.category} - {question.value}p</h4>*/}
                <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
            </div>
            <button className="btn btn-question" onClick={toAnswer}>Answer</button>
        </div>
    )

}