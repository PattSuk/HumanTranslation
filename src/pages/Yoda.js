import { useState } from 'react';
import yoda from '../assets/baby-yoda.gif'

function Yoda(props) {
    const [ translated, setTranslated ] = useState("Your words, enter...");

    const newText = event => {
        event.preventDefault();

        const form = event.target;
        const text = form.text.value;
        
        if(text.trim()) {
            fetch(`https://api.funtranslations.com/translate/yoda.json?text=${text}`)
            .then(response => response.json())
            .then(json => setTranslated(json.contents.translated))
            .catch((error) => handleError(error));
        }

    }

    const handleError = (error) => {
        console.log(error);
        const ans = document.querySelector('.page__ans');
        ans.classList.add('error-mes');
        setTranslated(`Rate limit of 5 requests per hour exceeded, please try again later.`);

    }

    return (
        <div className="page">
            <h1 className="page__header">You wanna talk to me ?</h1>
            <img src={yoda} alt="yoda" className="page__img page__img--yoda" />
            <form className="page__form" onSubmit={(e) => newText(e)}>
                <div className="page__display">
                    <label className="page__label" htmlFor="text">Human Language!</label>
                    <textarea className="page__textarea page__textarea--yoda" name="text" placeholder="Enter your words..." />
                </div>
                <input className="page__submit page__submit--yoda" type="submit" value="Translate" />
                <div className="page__display">
                    <p className="page__label">Yoda Language!</p>
                    <p className="page__ans">{translated}</p>
                </div>
            </form>
        </div>
    );
}

export default Yoda;