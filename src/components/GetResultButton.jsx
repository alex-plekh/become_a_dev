import React from 'react';

function GetResultButton({ onClick }) {
    return (
        <button onClick={onClick} className="get-result-btn">Get a unique character</button>
    );
}

export default GetResultButton;