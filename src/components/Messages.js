import React from 'react';
import './styles/Messages.css'

function Messages(props) {
    return (
        <div className="Main-Container">
            {props.children}
        </div>
    );
}

export { Messages };