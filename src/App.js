/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import About from './Components/About';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//Give Textform inside container and then import textform to show TextForm.js in web page
//div.container is the shortcut used to get the container this helps to show page in centre
//passed props heading inside textform to import(render) and display heading text in TextForm.js

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below" mode={mode}/>
        <About mode={mode} />
      </div>

    </>


  );

}

export default App;
