import React from 'react';
import { MessageContext } from '../MessageContext';

function Messenger() {
    const [newMessageValue, setNewMessageValue] = React.useState('');
    
    const {
        addMessage
    } = React.useContext(MessageContext);

    const onChange = (event) => {
        setNewMessageValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(newMessageValue.length <= 0)return;
        addMessage(newMessageValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea
                value={newMessageValue}
                onChange={onChange}
                placeholder="Mensaje"
            />
            <button
                type="submit"
            >
                ➤
            </button>
        </form>
    );
}

export { Messenger };