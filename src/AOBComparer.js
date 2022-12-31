import './AobComparer.css';
import { useState } from 'react';

function compareAobs(textAreaInput) {
    const stringList = [];
    console.log(textAreaInput);
    console.log(stringList);
    // while (textAreaInput.hasNextLine()) {
    //     const mine = textAreaInput.nextLine();
    //     if (mine.length() !== 0) {
    //         const comp = mine.charAt(0);
    //     }
    //     let result = '';
    //     let resultWithSlashes = '\\x';
    //     let mask = '';
    //     let maskVal = 'x';
    //     let writeMask = true;

    //     for (let i = 0; i < stringList[0].length(); i++) {
    //         let comp = stringList[0].charAt(i);
    //         for (const s of stringList) {
    //             if (s.charAt(i) !== comp || comp === '?') {
    //                 comp = '?';
    //                 maskVal = '?';
    //             }
    //         }
    //         result += comp;
    //         if (comp === ' ') {
    //             mask += maskVal;
    //             maskVal = 'x';
    //             resultWithSlashes += '\\x';
    //         } else {
    //             if (comp === '?') {
    //                 resultWithSlashes += 'a'; // this doesn't matter because of the mask
    //             } else {
    //                 resultWithSlashes += comp;
    //             }
    //         }
    //     }

    //     console.log(result);
    //     // console.log(resultWithSlashes);
    //     // console.log(mask);
    //     console.log('\n\nto paste into your prog');
    //     if (resultWithSlashes.charAt(resultWithSlashes.length - 1) === 'x') {
    //         console.log("the x shouldn't be here");
    //         resultWithSlashes = resultWithSlashes.substring(0, resultWithSlashes.length - 2);
    //     } else {
    //         mask += 'x';
    //     }
    //     resultWithSlashes += '"';
    //     // mask += '"';
    //     // console.error(
    //     //     `const char * ${fileName}Pattern = "${resultWithSlashes};`,
    //     // );
    //     // console.error(`const char * ${fileName}Mask = "${mask};`);
    // }
}

function AobComparer() {
    const [textInput, setTextInput] = useState('');

    function handleChange(event) {
        compareAobs(event.target.value);
        //TODOASDF make the setTextInput set to the valid AOBs
        setTextInput(event.target.value);
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