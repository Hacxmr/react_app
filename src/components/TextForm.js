import React, { useState } from 'react';



export default function TextForm(props) {
    const[myStyle,setMyStyle]=
    useState({
        color:'white',
        backgroundColor:'black',
        border:'2px solid white'
    })

    const[btnText,setbtnText]=useState("Enable Light Mode")

    const toggleStyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
    setbtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'

            })
            setbtnText("Enable Light Mode");

        }
    }


    const handleClick = () => {
        console.log("Uppercase was clicked");
        let newText=text1.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase",'success');
    }
    
    const handleToClick = () => {
        console.log("Lowercase was clicked");
        let newText=text1.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase",'success');

    }
    
    const handleClearClick = () => {
        console.log("Text was cleared");
        let newText='';
        setText(newText);
        props.showAlert("Text Clear",'success');

    }
    
    const handleOnSearch = () => {
        console.log("Search");
        let text=prompt("Enter the text to be searched");
        text1.search(text);
        // setText(newText);
    }
    

    const handleOnChange= (event) => {
        // console.log("On Change");
        setText(event.target.value);
      
    }

    const handleCopy=()=>{
        console.log("I am a copy")
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard",'success');

    }

    const handleExtraSpaces=()=>{
        let newText=text1.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed",'success');

    }

    const [text1, setText] = useState('Enter text here');
    // setText("My text here");

    return (
        <>
        <div className="container" style={myStyle}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text1} onChange={handleOnChange} id="myBox" rows="8"></textarea>
             
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleToClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleOnSearch} >Search</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >Space</button>
 
        </div>
        <div className="container my-3" style={myStyle}>
            <h1>Your Text Summary</h1>
            <p>{text1.split(" ").length} Words and {text1.length} characters</p>
            <p>{ 0.008*text1.split(" ").length} Minutes Read Time</p>
            <h2>Preview</h2>
            <p>{text1}</p>
        </div>
            <div className="container my-3" >
            <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div>
        </>
    );
}
