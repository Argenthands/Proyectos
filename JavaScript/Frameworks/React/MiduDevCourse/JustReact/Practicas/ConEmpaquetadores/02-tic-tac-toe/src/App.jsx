import { useState } from "react"
//npm install canvas-confetti -E or npm install canvas-confetti --save-exact
import confetti from 'canvas-confetti'

// tengo que mejorar esto en un futuro, no es eficiente tener que comprobar todas las combinaciones para saber si hay un ganador
const WINER_COMBINATIONS = [
	//filas --> el indice i no cambia y el j cambia
	[0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8],
	//columnas --> el indice j no cambia y el i cambia
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	//diagonales --> los indice i y j son 
	[0, 4, 8],
	[2, 4, 6],
]

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
	
	//Creando el estado del tablero y cargandolo con un array de 9 posiciones con valor null
	const [board, setBoard] = useState(Array(9).fill(null))

	//Creando el estado del turno y cargandolo con el valor de la constante TURNS.PLAYER_ONE que es 'X'
	const [turn, setTurn] = useState(TURNS.PLAYER_ONE)

	//Creando el estado ganador y cargandolo con el valor null que al ser falsy asumimos que implica que no hay ganador
	const [winner, setWinner] = useState(null)
	const checkWinner = (boardToCheck) => {
		//revision de todas las combinaciones para saber si hay un ganador
		for(const combination of WINER_COMBINATIONS) {
			const [a, b, c] = combination
			if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
				return boardToCheck[a]
			}
		}
		return null
	}

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
		const newWinner = checkWinner(newBoard)
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
				{
					winner !== null && (
						<section className="winner">
							<div className="text">
								<h2>
									{
										winner === false? 'Empate' : `Ganador: ${winner}`
									}
								</h2>
								<header className="win">
									{
										winner && <Square>{ winner }</Square>
									}
								</header>
								<footer>
									<button onClick={resetGame}>Empezar de nuevo</button>
								</footer>
							</div>
						</section>
					)
				}
			</main>
		</>
	)
}
export default App