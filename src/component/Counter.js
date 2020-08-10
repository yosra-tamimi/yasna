import React , {useState} from 'react';


function Counter(props){

    const {item} = props;
    
    const [text , setText] = useState(0);
    
    let runHandler = e => {
        let newco = e.target.value + item.text;
        setText(newco)
    }
    

    return(
        <div className="add-counter col-4">
            <div className="counter-header ">
                <strong>Step: {item.text} </strong>
            </div>
            <div className="counter-main">
                <p > {text} </p>
                <button className="run-button" onClick={runHandler}> Run </button>
            </div>
        </div>
    )
    
}


export default Counter;