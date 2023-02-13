import { useEffect, useRef } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { GiFlowerPot } from "react-icons/gi"

export interface MessageProps {
	isChat: boolean
	message: string
}

interface MessageComponentProps extends MessageProps {}

export function Message({ isChat, message }: MessageComponentProps) {
	return (
		<div
			className={`py-8 flex justify-center w-screen ${
				isChat && "bg-[#444654] border-y border-slate-700"
			}`}
		>
			<div className="grid grid-cols-10 w-[65%]">
				<div className="flex justify-center">
					{isChat ? (
						<div
							className="w-8 h-8 rounded-sm bg-[#5AC1A7] flex items-center justify-center"
							title="O BOT"
						>
							<GiFlowerPot className="text-white" />
						</div>
					) : (
						<div className="w-8 h-8 rounded-sm bg-[#9A5AB4] flex items-center justify-center">
							<AiOutlineUser title="Você" />
						</div>
					)}
				</div>
				<div className="col-span-9 flex items-center justify-start">{message}</div>
			</div>
		</div>
	)
}
