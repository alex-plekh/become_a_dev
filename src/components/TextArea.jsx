import React from 'react';

function TextArea( {value, onChange} ) {

    return (
        <textarea
            value={value}
            onChange={onChange}
            className="text-area"
            placeholder="Enter your text"
        />
    );
}

export default TextArea;