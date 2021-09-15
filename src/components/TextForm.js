import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');


    return (
        <> 
        <div className="container "  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea class="form-control my-2" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',  
            color:props.mode==='light'?'black':'white'}} onChange={handleUpChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Con to UC</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Con to LC</button>
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Here</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2 >Preview</h2>
            <p>{0.08 * text.split(" ").length }</p>
        </div>
        </>
    )
}
