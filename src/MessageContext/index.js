import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const MessageContext = React.createContext();

function MessageProvider(props) {
    const {
        item: messages,
        saveItem: saveMessage,
        loading,
        error,
    } = useLocalStorage('MESSAGES', []);

    const addMessage = (text) => {
        const newMessages = [...messages];
        newMessages.push({text});
        saveMessage(newMessages);
    }

    return (
        <MessageContext.Provider value = {{
			loading,
			error,
			messages,
            addMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    );
}

export { MessageContext, MessageProvider};