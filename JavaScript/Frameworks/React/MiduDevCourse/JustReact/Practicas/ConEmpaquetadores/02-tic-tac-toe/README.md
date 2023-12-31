# Segundo Proyeccto:

1. ## Eliminando contenido innecesario

    - Remplazando el contenido de [index.css](./src/index.css) por el siguiente:
    
    ```css
    :root {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        display: flex;
        justify-content: center;
        min-width: 320px;
        min-height: 100vh;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .board {
        width: fit-content;
        margin: 40px auto;
        text-align: center;
    }

    .board h1 {
        color: #eee;
        margin-bottom: 16px;
    }

    .board button {
        padding: 8px 12px;
        margin: 25px;
        background: transparent;
        border: 2px solid #eee;
        color: #eee;
        width: 100px;
        border-radius: 5px;
        transition: 0.2s;
        font-weight: bold;
        cursor: pointer;
    }

    .board button:hover {
        background: #eee;
        color: #222;
    }

    .board .game {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .turn {
        display: flex;
        justify-content: center;
        margin: 15px auto;
        width: fit-content;
        position: relative;
        border-radius: 10px;
    }

    .turn .square,
    .winner .square {
        width: 70px;
        height: 70px;
        pointer-events: none;
        border-color: transparent;
    }

    .square.is-selected {
        color: #fff;
        background: #09f;
    }

    .winner {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: grid;
        place-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .winner .text {
        background: #111;
        height: 300px;
        width: 320px;
        border: 2px solid #eee;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .winner .win {
        margin: 0 auto;
        width: fit-content;
        border: 2px solid #eee;
        border-radius: 10px;
        display: flex;
        gap: 15px;
    }

    .square {
        width: 100px;
        height: 100px;
        border: 2px solid #eee;
        border-radius: 5px;
        display: grid;
        place-items: center;
        cursor: pointer;
        font-size: 48px;
    }
    ```

    - Limpiando el archivo [App.jsx](./src/App.jsx):
    ```jsx
    function App() {return (<></>)}
    export default App
    ```

2. ## Creando los componentes:
    1. ### Creando el archivo `constants.js` en la ruta [./src/constants.js](./src/constants.js):
        ```js
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
        ```
    2. ### Creando el `Square` en la ruta [./src/components/Square/Square.jsx](./src/components/Square/Square.jsx):
        ```jsx
        export const Square = ({ children, isSelected, updateBoard, index }) => {
            const className = `square ${isSelected ? 'is-selected' : ''}`
            const handleClick = () => {
                updateBoard(index)
            }
            return (
                <div
                    className={className}
                    onClick={handleClick}
                >
                    {children}
                </div>
            )
        }
        ```
    3. 