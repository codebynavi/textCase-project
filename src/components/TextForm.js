// type "rfc" and HIT ENTER to get react based function template

import React, { useState } from 'react';

export default function TextForm(props) {


    const upperCase = () => {
        // console.log("Uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to UPPERCASE!', 'success');
    }
    const lowerCase = () => {
        // console.log("Uppercase button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert('Converted to Lowercase!', 'success');
    }
    const capitalzeText = () => {

        //method 1 to convert text to capitalize
        // const words = text.split(" ");
        // for (let i = 0; i < words.length; i++) {
        //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        // }
        // let newText = words.join(" ");
        //setText(newText);

        //method 2 to convert text to capitalize
        let text1 = text.toLowerCase();
        let newText = text1.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); // one liner solution
        setText(newText);
        // props.showAlert('Converted to Capitalize Text!', 'success');
    }
    const urlCase = () => {
        // console.log("Uppercase button was clicked");
        let newText1 = text.toLowerCase();
        let newText2 = newText1.replaceAll(' ', '-');
        setText(newText2);
        // props.showAlert('Converted to URL Case!', 'success');
    }

    const removeSpace = () => {
        // console.log("Uppercase button was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert('Extra Spaces Removed!', 'success');
    }
    const copyText = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text copied to Clipboard!', 'success');
    }
    const clear = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text Box Cleared!', 'success');
    }
    const handleOnChange = (event) => {
        // console.log("Handle ON Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1 className="text-center mt-5 fw-bold">{props.heading}</h1>
                <p className='text-center mb-3'>Forget your <b>Typing Text Case Mistake</b>, Convert your Text in Just <b>ONE CLICK</b></p>
                <div className="mb-3">
                    <textarea className="form-control rounded-1" id="myBox" onChange={handleOnChange} rows="10" placeholder="Enter Text Here" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>

                    <button className="btn btn-primary mt-2 btn-sm me-2 rounded-0" onClick={upperCase}>Convert to UPPERCASE</button>
                    <button className="btn btn-primary mt-2 btn-sm me-2 rounded-0" onClick={lowerCase}>Convert to lowercase</button>
                    <button className="btn btn-primary mt-2 btn-sm me-2 rounded-0" onClick={capitalzeText}>Convert to Capitalize</button>
                    <button className="btn btn-primary mt-2 btn-sm me-2 rounded-0" onClick={urlCase}>Convert to URL Case</button>
                    <button className="btn btn-primary mt-2 btn-sm me-2 rounded-0" onClick={removeSpace}>Remove Extra Spaces</button>
                    <button className="btn btn-success mt-2 btn-sm me-2 rounded-0" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-danger mt-2 btn-sm me-2 rounded-0" onClick={clear}>Clear Text</button>

                </div>
            </div>
            <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your Text Summary</h2>
                {/* <p>{text.split(' ').length} Words  and {text.length} Characters | {0.008 * text.split(' ').length} Minutes Read</p> */}
                <p>{text.split(' ').length === 1 ? 0 : text.split(' ').length - 1} Words  and {text.length} Characters | {0.008 * text.split(' ').length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter any text above in the text box to preview it here'}</p>
            </div>
        </>
    )
}



