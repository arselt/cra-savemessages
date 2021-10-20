import React from "react";
import { MessageProvider } from "../MessageContext";
import { AppUI } from "./AppUI"

// const mensajes = [
// 	{ text: 'Hola' },
// 	{ text: 'Hola React' },
//   ];

function App() {
	return (
		<MessageProvider>
			<AppUI />
		</MessageProvider>
	);
}

export default App;
