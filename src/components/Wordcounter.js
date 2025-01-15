import React, { useState } from 'react';
import './wordcounter.css';
const Wordcounter = () => {
    const [character, setCharacter] = useState("")
    const [count, setCount] = useState(0);
    const [countword, setCountword] = useState(0);
    const valueshandle = (e) => {
        setCharacter(e.target.value);
        console.log(character.length);
        const chars = character.match(/\b\w+\b/g)?.length
        console.log(chars);
        setCountword(chars);
        setCount(character.length);

    }
    const Clear = () => {
        setCharacter("");
        setCountword(0);
        setCount(0);

    }

    return (
        <div className='container'>
            <div className="head">
                <h1>Word Counter</h1>
                <p>Free online character and word count tool</p>
            </div>
            <div className="inputs" >
                <textarea name="textarea" rows={15} cols={90} onChange={valueshandle} value={character} maxLength="501" placeholder='Type or Paste your text'></textarea>
            </div>
            <div className="buttons">
                <div className={character === "" ? "noneclear" : "clear"}><div className='hiden'> <button type='clear' onClick={Clear}  > clear</button></div></div>
                <div className="character">
                    <button>Character: {count}/500</button>
                    <button>Word: {countword}</button>

                </div>
            </div>
        </div>
    )
}

export default Wordcounter
