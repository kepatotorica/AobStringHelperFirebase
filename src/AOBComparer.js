import './AobComparer.css';
import { useState } from 'react';

function compareAobs(textAreaInput) {
    var listOfInputs = textAreaInput.trim().split("\n");
    let aobList = listOfInputs.map(string => string.split(' '));
    let AOB = aobList[0];
    aobList.forEach(list => {
        list.forEach((aobElement, index) => {
            if (AOB[index] !== aobElement) {
                AOB[index] = '?';
            }
        });
    });

    return AOB;
};

function AobComparer() {
    const [textInput, setTextInput] = useState('');

    function handleChange(event) {
        var AOBString = compareAobs(event.target.value);
        setTextInput(AOBString.join(' '));
    };

    return (
        <div className="AobComparer">
            <header className="App-header">
                This app will help you find a good string to use for an AOB scan
                <div>{textInput}</div>
                <textarea className="Aob-Inputs" rows="100" onChange={handleChange}></textarea>
            </header>
        </div>
    );
}

export default AobComparer
