import React, {
	createRef,
	FormEvent,
	InputHTMLAttributes,
	LegacyRef,
	useContext,
	useRef,
} from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { RiSendPlane2Fill } from "react-icons/ri"
import { MessagesContext } from "../context/messages-context"
import { MessageProps } from "./Message"

interface FormProps {
	setMessages: React.Dispatch<React.SetStateAction<MessageProps[] | []>>
}

interface FormInputs {
	message: string
}

export function Form({ setMessages }: FormProps) {
	const { setMessageSent } = useContext(MessagesContext)
	const { register, handleSubmit, reset } = useForm<FormInputs>()

	const handleSendMessage: SubmitHandler<FormInputs> = (data) => {
		setMessages((prevState) => {
			const value = data.message

			if (value === "/clear") return []

			setMessageSent(true)

			return [...prevState, { isChat: false, message: value }]
		})

		reset()
	}

	return (
		<form
			className="bg-[#41414C] p-3 h-12 rounded-md shadow-lg w-[60%] flex items-center"
			onSubmit={handleSubmit(handleSendMessage)}
		>
			<input
				type="text"
				className="outline-none bg-transparent flex-1"
				{...register("message")}
			/>
			<button type="submit">
				<RiSendPlane2Fill size={20} className="cursor-pointer text-[#BCBAC4]" />
			</button>
		</form>
	)
}
