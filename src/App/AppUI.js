import React from "react";
import { MessageContext } from "../MessageContext";
import { Header } from "../components/Header";
import { Messages } from "../components/Messages";
import { MessageBox } from "../components/MessageBox";
import { Messenger } from "../components/Messenger";

function AppUI() {
    const {
        error,
        loading,
        messages,
    } = React.useContext(MessageContext)

    return (
        <React.Fragment>
            <Header />
            <Messages>
                {error && <p> Sucedio un error</p>}
                {loading && <p> Cargando... </p>}
                {(!loading && !messages.length) && <p> Empieza a enviar mensajes </p>}

                {messages.map((message, index) => (
                <MessageBox key={index} text={message.text} />
                ))}
            </Messages>
            <Messenger />
		</React.Fragment>
    );
}

export { AppUI };