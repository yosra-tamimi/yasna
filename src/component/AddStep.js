import React , { useState } from 'react'

function AddStep(props){

    const [ text , setText ] = useState('');

    let formHandler = e => {
        e.preventDefault();
        props.add(text);
        setText('');
    }

    let inputHandler = e => setText(e.target.value)
    

    return(
        <form onSubmit={formHandler} >
            <div className="form-group">
                <input type="number" className="step-text " placeholder="Step" value={text} onChange={inputHandler} />
                <button type="submit" className="add-button" ><span>Add Counter </span></button>
            </div>
        </form>
    )
    
}

export default AddStep;