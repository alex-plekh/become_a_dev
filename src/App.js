import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import GetResultButton from "./components/GetResultButton";
import Result from "./components/Result";
import Modal from "./components/Modal";

function findFirstUniqueChar(text) {
    let wordList = text.split(/[\s.,]+/); // Split the text into an array of words by spaces, dots, and commas
    let uniqueChars = [];

    for (let word of wordList) { // Iterate over each word
        let charCounts = {};

        for (let char of word) { // Iterate over each character in the word
            if (charCounts[char]) { // If the character is already in charCounts increment the count
                charCounts[char]++;
            } else {
                charCounts[char] = 1; // Initialize the count to 1
            }
        }

        for (let char of word) { // Iterate over each character in the word again
            if (charCounts[char] === 1) { // If the count is 1, it's a unique character
                uniqueChars.push(char); // Add it to the uniqueChars array
                break; // Exit the loop, since we found the first unique character
            }
        }
    }

    for (let char of uniqueChars) { // Iterate over each unique character
        if (uniqueChars.indexOf(char) === uniqueChars.lastIndexOf(char)) {   // If the index of the character is the same as the last index, appears only once in the uniqueChars array
            return char; // Return the first unique character
        }
    }

    return 'This text doesn\'t have a unique character!';
}

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [isModalOpen, setModalIsOpen] = useState(false);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleGetResult = () => {
        setResult(findFirstUniqueChar(text));
        if (text.trim() === '') {
            setModalIsOpen(true);
            setResult('');
            return  '';
        } else {
            const char = findFirstUniqueChar(text);
            setResult(char);
            setModalIsOpen(false);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className={'container'}>
            <Header/>
            <TextArea value={text} onChange={handleInputChange}/>
            <GetResultButton onClick={handleGetResult} />
            <Result result={result} />
            <Modal isOpen={isModalOpen} onClose={closeModal} uniqueChar={setResult} />
        </div>
    );
}

export default App;
