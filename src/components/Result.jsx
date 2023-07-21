import React from 'react';

function Result({ result }) {
    return (
        <p className="result-text">First unique character: {result}</p>
    );
}

export default Result;