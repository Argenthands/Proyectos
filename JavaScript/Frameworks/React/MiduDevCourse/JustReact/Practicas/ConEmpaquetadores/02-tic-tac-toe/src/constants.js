// tengo que mejorar esto en un futuro, no es eficiente tener que comprobar todas las combinaciones para saber si hay un ganador
// Condiciones de victoria
export const WINER_COMBINATIONS = [
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

// Turnos de los jugadores y con que se marca en la casilla
export const TURNS = {
	PLAYER_ONE: 'X',
	PLAYER_TWO: 'O',
}