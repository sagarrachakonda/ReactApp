/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
//Give Textform inside container and then import textform to show TextForm.js in web page
//div.container is the shortcut used to get the container this helps to show page in centre
//passed props heading inside textform to import(render) and display heading text in TextForm.js

function App() {
  return (
    <>
         <Navbar title ="TextUtils" aboutText="About TextUtils"/>
         
         <div className="container my-3">
             <TextForm heading="Enter the Text to analyze below"/>
         </div>
         
    </>

   
  );
  
}

export default App;
