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
    const handleonchange = (event)=>{

        setText(event.target.value);
    }
    return (
        <>
      
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange = {handleonchange} id="myBox" rows="8"></textarea>
                </div>
            </form>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UpperCase</button> 
            <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
        </div>

        <div className="container my-3">

            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

          </>
    )
}
