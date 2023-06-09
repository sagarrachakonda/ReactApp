//Hit rfc to get rract functional component below

import React, {useState} from 'react'
//render the form fom bootstrap
//used props to get heading message from App.js
//In this we can increase the text box size
//To create button shortcut is button.btn.btn-primary
// For defining state used react hooks concept and code is copied from https://legacy.reactjs.org/docs/hooks-intro.html
//For hooks concept firstly imported {useSate and then code is copied from site}
// given the text value for usestate in textarea as defaultValue = {text}
// Shortcut to create div container is div.container
export default function TextForm(props) {
    const [text, setText] = useState('');
    // To alter the setText use below syntax
    // setText("Please Enter Text here"); 

    const handleUpperCaseClick = ()=>{
        //console.log("You Clicked Convert toUpperCase Button"+ text);
        
        let newText = text.toUpperCase();
        
        setText(newText)
    }
     const handleLowerCaseClick = ()=>{
        //console.log("You Clicked Convert toUpperCase Button"+ text);
        
        let newText = text.toLowerCase();
        
        setText(newText)
    }
    const handleClearTextClick = ()=>{
        //console.log("You Clicked Convert toUpperCase Button"+ text);
        
        let newText = '';
        
        setText(newText)
    }
    const handleCopyTextClick = ()=>{
        //console.log("You Clicked Convert toUpperCase Button"+ text);
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpacesClick = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const handleonchange = (event)=>{

        setText(event.target.value);
    }
    return (
        <>
      
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange = {handleonchange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
            </form>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button> 
            <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyTextClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>handle Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>

            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text above to show preview'}</p>
        </div>
<br></br>
          </>
    )
}
