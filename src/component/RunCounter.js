import React , { useState } from 'react'


function RunCounter(props) {

    const {item} = props;

    const [text , setText] = useState(0);
    
    let runHandler = e => {
        let newco = e.target.value + item.text;
        setText(newco)
    }



    return (
        <>
            <p > {text} </p>
            <button type="button" className="run-button" onClick={runHandler}> Run </button>
        </>

    )
}


export default RunCounter;

//() => props.run(text)