import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('enter the text')

    const handleUpperCase = () => {
        // console.log("handling camel case click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to upper case", "success");
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to lower case", "success");
    }

    const handleClear = () => {
        setText('')
        props.showAlert("Text field has been Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handle on change")
        setText(event.target.value)
    }

    const handleCopy = () => {
        // let text = document.getElementById("mybox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra space has been removed", "success");
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="heading">{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#222831' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="5" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>UPPER CASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>lower case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length > 0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length > 0}).length} mins to read the text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
            </div>
        </>
    )
}
