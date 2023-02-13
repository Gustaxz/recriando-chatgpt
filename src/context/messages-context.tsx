import { createContext, useState } from "react"

interface MessagesContextProps {
	messageSent: boolean
	setMessageSent: React.Dispatch<React.SetStateAction<boolean>>
}

export const MessagesContext = createContext<MessagesContextProps>({
	messageSent: false,
	setMessageSent: () => {},
})

export function MessagesProvider({ children }: any) {
	const [messageSent, setMessageSent] = useState(false)

	return (
		<MessagesContext.Provider value={{ messageSent, setMessageSent }}>
			{children}
		</MessagesContext.Provider>
	)
}
