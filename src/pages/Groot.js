import { useState } from 'react';
import groot from '../assets/groot.gif'

function Groot(props) {
    const [ translated, setTranslated ] = useState("I am groot.");

    const newText = event => {
        event.preventDefault();

        const form = event.target;
        const text = form.text.value;
        
        if(text.trim()) {
            fetch(`https://api.funtranslations.com/translate/groot.json?text=${text}`)
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
            <img src={groot} alt="groot" className="page__img page__img--groot" />
            <form className="page__form" onSubmit={(e) => newText(e)}>
                <div className="page__display">
                    <label className="page__label" htmlFor="text">Human Language!</label>
                    <textarea className="page__textarea page__textarea--groot" name="text" placeholder="Enter your words..." />
                </div>
                <input className="page__submit page__submit--groot" type="submit" value="Translate" />
                <div className="page__display">
                    <p className="page__label">Groot Language!</p>
                    <p className="page__ans">{translated}</p>
                </div>
            </form>
        </div>
    );
}

export default Groot;