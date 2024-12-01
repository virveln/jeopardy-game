import "../App.css";
import '../styles/startpage.css';

export default function StartPage({ enterPlayers, instructions, goToAttributions }) {
    return (
        <div className="start-page background-start">
            {/* <h1 className='start-title'>NYÅR 2024 EDITION</h1> */}
            <div className="btn-start-container">
                <button className="btn btn-startpage" onClick={enterPlayers}>Play Game</button>
                <button className="btn btn-startpage" onClick={instructions}>Instructions</button>
            </div>
            <p className="btn-to-attribution" onClick={goToAttributions} >Attribution</p>
            <p className="tips">Press F11 for full-screen mode</p>
        </div>
    );
}

