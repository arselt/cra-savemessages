import React from 'react';
import './styles/MessageBox.css'

function MessageBox(props) {
    return (
        <>
            <li className="Text-Bubble">
                <p className="Text">{props.text}</p>
            </li>
        </>
    );
}

export { MessageBox };