import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { MessagesProvider } from "./context/messages-context"
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MessagesProvider>
			<App />
		</MessagesProvider>
	</React.StrictMode>
)
