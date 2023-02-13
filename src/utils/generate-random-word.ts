import { RandomWords } from "./random-words"

function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function generateRandomWord(): string {
	const integer = randomIntFromInterval(0, RandomWords.length - 1)
	const word = RandomWords[integer]

	return word
}
