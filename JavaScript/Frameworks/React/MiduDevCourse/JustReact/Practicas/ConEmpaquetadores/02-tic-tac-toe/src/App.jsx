import { useState } from "react"
import { Square } from "./components/Square/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal/WinnerModal.jsx"

//npm install canvas-confetti -E or npm install canvas-confetti --save-exact
import confetti from 'canvas-confetti'


function App() {
	
	//Creando el estado del tablero y cargandolo con un array de 9 posiciones con valor null
	const [board, setBoard] = useState(Array(9).fill(null))

	//Creando el estado del turno y cargandolo con el valor de la constante TURNS.PLAYER_ONE que es 'X'
	const [turn, setTurn] = useState(TURNS.PLAYER_ONE)

	//Creando el estado ganador y cargandolo con el valor null que al ser falsy asumimos que implica que no hay ganador
	const [winner, setWinner] = useState(null)
	

	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.PLAYER_ONE)
		setWinner(null)
	}

	const updateBoard = (index) => {

		//comprobar si la casilla esta ocupada
		if (board[index] || winner) return

		//actualizar el tablero
		// se clona el tablero porque hay que tratar los estados como inmutables, esto es debido a que React internamente esta observando la referencia del estado y si se modifica el valor al que apunta la referencia, React no se entera de que ha cambiado el estado y no se vuelve a renderizar el componente
		const newBoard = [...board] 
		newBoard[index] = turn
		setBoard(newBoard)

		//cambiar de turno
		const newTurn = turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE
		setTurn(newTurn)

		//comprobar si hay un ganador
		const newWinner = checkWinnerFrom(newBoard)
		if (newWinner) {
			setWinner(newWinner)
			confetti()
		}
	}
	return (
		<>
			<main className="board">
				<h1>Tic Tac Toe</h1>
				<section className="game">
					{
						board.map((cell, index) => {
							return (
								<Square
									key={ index }
									index={ index }
									updateBoard={ updateBoard }
								>
									{ board[index] }
								</Square>
							)
						})
					}
				</section>
				<section className="turn">
					<Square isSelected={turn === TURNS.PLAYER_ONE}>
						{ TURNS.PLAYER_ONE }
					</Square>
					<Square isSelected={turn === TURNS.PLAYER_TWO}>
						{ TURNS.PLAYER_TWO }
					</Square>
				</section>
				<WinnerModal winner={winner} resetGame={resetGame} />
			</main>
		</>
	)
}
export default App