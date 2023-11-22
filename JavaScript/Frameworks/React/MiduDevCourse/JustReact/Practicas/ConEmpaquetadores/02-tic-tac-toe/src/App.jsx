import { useState } from "react"

const TURNS = {
	PLAYER_ONE: 'X',
	PLAYER_TWO: 'O',
}

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`
	const handleClick = () => {
		updateBoard(index)
	}
	return(
		<div 
			className={ className }
			onClick={ handleClick }
		>
			{ children }
		</div>
		)
	}
	
function App() {
	const [board, setBoard] = useState(Array(9).fill(null))
	
	const [turn, setTurn] = useState(TURNS.PLAYER_ONE)

	const updateBoard = (index) => {

		//comprobar si la casilla esta ocupada
		if (board[index]) return

		//actualizar el tablero
		// se clona el tablero porque hay que tratar los estados como inmutables, esto es debido a que React internamente esta observando la referencia del estado y si se modifica el valor al que apunta la referencia, React no se entera de que ha cambiado el estado y no se vuelve a renderizar el componente
		const newBoard = [...board] 
		newBoard[index] = turn
		setBoard(newBoard)
		//cambiar de turno
		const newTurn = turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE
		setTurn(newTurn)
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
			</main>
		</>
	)
}
export default App