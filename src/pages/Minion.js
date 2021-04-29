import { useState } from 'react';
import minion from '../assets/minion.gif'

function Minion(props) {
    const [ translated, setTranslated ] = useState("rya tu mew...");

    const newText = event => {
        event.preventDefault();

        const form = event.target;
        const text = form.text.value;
        
        if(text.trim()) {
            fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
            .then(response => response.json())
            .then(json => setTranslated(json.contents.translated))
            .catch((error) => console.log(error));
        }

        //form.reset();
    }

    return (
        <div className="page">
            <h1 className="page__header">You wanna talk to me ?</h1>
            <img src={minion} alt="jumping minion" className="page__img" />
            {/* <div className="page__container"> */}
                <form className="page__form" onSubmit={(e) => newText(e)}>
                    <div className="page__display">
                        <label className="page__label" htmlFor="text">Human Language!</label>
                        <textarea className="page__textarea page__textarea--minion" name="text" placeholder="Enter your words..." />
                    </div>
                    <input className="page__submit page__submit--minion" type="submit" value="Translate" />
                    <div className="page__display">
                        <p className="page__label">Minion Language!</p>
                        <p className="page__ans">{translated}</p>
                    </div>
                </form>
            {/* </div> */}
        </div>
    );
}

export default Minion;