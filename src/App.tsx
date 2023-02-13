import { createRef, useCallback, useContext, useEffect, useState } from "react"
import { Form } from "./components/Form"
import { Message, MessageProps } from "./components/Message"
import { v4 as uuidV4 } from "uuid"
import { MessagesContext } from "./context/messages-context"
import { generateRandomWord } from "./utils/generate-random-word"

function App() {
	const { messageSent, setMessageSent } = useContext(MessagesContext)
	const messageRef = createRef<HTMLDivElement>()
	const [menssages, setMessages] = useState<MessageProps[]>([])

	console.log(messageRef)

	useEffect(() => {
		if (messageSent) {
			setMessages((prevState) => [
				...prevState,
				{ isChat: true, message: generateRandomWord() },
			])

			if (messageRef.current != null) messageRef.current.scrollIntoView()

			setMessageSent(false)
		}
	}, [messageSent])

	return (
		<div className="bg-[#343541] h-screen text-[#d3d2da]">
			<div className="flex flex-col items-center max-h-[85vh] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#5D5F71] scrollbar-thumb-rounded-md">
				{menssages.length != 0 ? (
					menssages.map((menssage) => (
						<Message
							isChat={menssage.isChat}
							message={menssage.message}
							key={uuidV4()}
						/>
					))
				) : (
					<div className="font-semibold text-5xl mt-20">Dandelion Chat</div>
				)}
				<span ref={messageRef} className="text-transparent select-none">
					.
				</span>
			</div>
			<div className="flex flex-col gap-2 items-center absolute bottom-3 w-screen">
				<Form setMessages={setMessages} />
				<p className="text-[#67696F] text-center">
					Esse é um site fake que tem como intuito fazer uma brincadeira com o real Chat
					GPT
				</p>
			</div>
		</div>
	)
}

export default App

// usar useEffect ou document não funciona
