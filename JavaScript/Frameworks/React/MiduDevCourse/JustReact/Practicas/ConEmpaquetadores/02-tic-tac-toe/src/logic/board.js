import { WINER_COMBINATIONS } from '../constants'
export const checkWinnerFrom = (boardToCheck) => {
    //revision de todas las combinaciones para saber si hay un ganador
    for(const combination of WINER_COMBINATIONS) {
        const [a, b, c] = combination
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    return null
}