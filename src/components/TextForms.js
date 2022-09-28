import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converter to Upper case","success ");
    }
    const handleCapClick = () =>{
        console.log("Capitalize was clicked");
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text Capitalized","success ");
    }
    const handleCapAllClick = () =>{
        console.log("Captalize all first letters was clicked");
        let textarr = text.split(" ");
        for (var i = 0; i < textarr.length; i++){
            textarr[i] = textarr[i].charAt(0).toUpperCase() + textarr[i].slice(1); 
            props.showAlert("All first letter Capitalized","success ");
        }
        let newText = textarr.join(" ");
        setText(newText);
    }
    const handleloClick = () =>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converter to Lower Case","success ");
    }
    const handleclearClick = () =>{
        console.log("Clear was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success ");
    }
    const handleCopy = () =>{
        console.log("Copy was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success ");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    

    const [text, setText] = useState('Enter Text Here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className="container"style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example testarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="btncontainer">
        <button className="btn btn primary upclickbtn" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn primary capclickbtn" onClick={handleCapClick}>Capitalize the Text</button>
        <button className="btn btn primary capallclickbtn" onClick={handleCapAllClick}>Capitalize all First letters</button>
        <button className="btn btn primary lowerclickbtn" onClick={handleloClick}>Convert to Lower Case</button>
        <button className="btn btn primary clearclickbtn" onClick={handleclearClick}>Clear</button>
        <button className="btn btn primary copyclickbtn" onClick={handleCopy}>Copy</button>


        </div>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} Words,and {text.length} characters</p>
    </div>
    </>
  )
}
