
import React, { useState } from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'green',
        border: '2px solid white'
    })
    const [yoStyle, setYoStyle] = useState({
        color: 'black',
        backgroundColor: 'cyan'
    })
    const[btntext, setBtnText] = useState("Enable Mode")

    const toggleStyle = () =>{
        if(props.mode === 'light'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid black'
            })
            setYoStyle({
                color: 'black',
                backgroundColor: 'cyan'
            })
            setBtnText("Enable Mode "+props.mode)
        }else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid yellow'
            })
            setYoStyle({
                color: 'white',
                backgroundColor: 'brown'
            })
            setBtnText("Enable Mode "+props.mode)
        }
    }
    /*let myStyle ={
        
    } */
    /*let yoStyle ={
        color: 'black',
        backgroundColor: 'cyan'
    } */
    return (
        <div className="container" style={myStyle}>

            <h1 className='my-2'> About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={yoStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Shweta
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>My Name is Shweta.</strong> I was born on 19 June 1995.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={yoStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Khushi
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>My Name is Khushi.</strong> I was born on 28 April 2022 and I love my Dad.
                            </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={yoStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Sagar
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>My Name is Sagar.</strong> I was born on 3rd April 1992.
                            </div>
                    </div>
                </div>
            </div>
            <br></br>
            
           
            
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary mx-2">{btntext}</button>
           </div>

        </div>
    )
}
