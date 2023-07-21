import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Warning</h3>
                <p>The text is not entered!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;