# Primer Proyeccto:

1. ## Eliminando ficheros innecesarios:

    - **En la carpeta `src` eliminar:**
        - `App.css`
        - `App.jsx`
        - `index.css`

2. ## Entendiendo el [main.jsx](./src/main.jsx):

    - **Importando React:**
        ```jsx
        import React from 'react';
        ```
    - **Importando ReactDom:**
        ```jsx
        import ReactDOM from 'react-dom';
        ```
    - **Renderizando el componente `App`:**
        - Removemos el `import` de `App.css` y `App.jsx` ya que eliminamos los archivos.
        - Quitamos el `React.StrictMode` ya que abordaremos su funcionamiento mas adelante.
        - Colocamos texto en el `h1` para ver que se renderiza correctamente.
        ```jsx
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<h1>Hola Mundo</h1>);
        ```
        #### Observamos el resultado en el navegador:
        ##### ***Nota:*** en este caso no fue necesario usar `React.createElement(etiqueta, {atributos}, [hijos]/contenido)` como en la verción sin boundle. Esto es debido a que estamos usando [JSX](https://www.w3schools.com/react/react_jsx.asp)

    - **Agregando un gragment de React:**
        - Removemos el texto del `h1` y agregamos un `fragment` de React con dos elementos hijos.
        ```jsx
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <>
                <h1>Hola Mundo</h1>
                <p>Este es un parrafo</p>
            </>
        );
        ```
        #### Observamos el resultado en el navegador:

3. ## Creando un component: 
    ### ¿Porque usar componentes? Se hace de esta manera porque se siguen nomras de diseño, a continuación te explicare algunos de los conceptos detras de esto:
    - **`Modularidad`**: Es la capacidad de dividir un sistema en partes mas pequeñas. Los objetivos son:
        - **`Mantenibilidad`**: Es la capacidad de hacer cambios en el código de manera sencilla, sin tener que propagarlos por todos los lugares en los que interfiere.
        - **`Reusabilidad`**: Es la capacidad de usar una parte del sistema en diferentes partes de la aplicación y no tener que reescribir el codigo en cada lugarl..
        - **`Escalabilidad`**: Es la capacidad de hacer crecer el sistema de manera sencilla, sin que las nuevas cosas interfieran con lo que ya esá implementado..
    - **`Composición`**: Es la capacidad de componer una entidad a partir de otras entidades mas pequeñas. Es la contra parte de la modularidad. Mientras la `modularidad` divide el sistema en partes mas pequeñas, la `composición` construye una entidad a partir de esas partes a las que solemos llamar **`componentes`**.
    - **`Separación de responsabilidades`**: Es la capacidad de dividir el sistema en partes que tengan una responsabilidad única.
    - **`Abstracción`**: Es la capacidad de ocultar detalles de implementación y exponer solo los detalles que sean necesarios.
    - **`Encapsulamiento`**: Es la capacidad de agrupar datos y comportamientos en una sola entidad.

- **Creando un componente `Button`:**
    - Creamos un archivo `Button.jsx` en la carpeta `src/components`.
    - Creamos un componente `Button` que recibe un `props` y retorna un `button` con el texto que recibe por `props`.
    ```jsx
    // por convención los componentes se escriben con PascalCase, es decir la primera letra de todas las palabras en mayúscula sin espacio entre ellas.
    export default function Button({ text }) {
        return (
            <div>{text}</div>
        )
    }
    ```
- **Importando el componente `Button` en `main.jsx` y lo colocamos:**
    - Importamos el componente `Button` en `main.jsx`.
    ```jsx
    /// ...
    import Button from './components/Button';

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <React.Fragment>
            <h1>Hola Mundo</h1>
            <p>Esto es un párrafo</p>
            <Button text="Click" />
        </React.Fragment>
    )
    ```

4. ## Separando main de App:
    ### ¿Porque separar `main.jsx` de `App.jsx`?
    - **`Separación de responsabilidades`**: Es la capacidad de dividir el sistema en partes que tengan una responsabilidad única. De esta manera seguimos el diseño de `componentes` y `composición` que vimos anteriormente.

    - Creamos un archivo `App.jsx` en la carpeta `src`.
    ```jsx
    import Button from './Components/Button'

    export function App() {
        const buttons = ["Botón 1", "Botón 2", "Botón 3"]
        return (
            <>
                <h1>Hola Mundo</h1>
                <p>Esto es un párrafo</p>
                <Button text="Click" />
                <div>
                    {buttons.map((text, index) => (
                        <Button key={index} text={text} />
                    ))}
                </div>
            </>
        );
    }
    ```
    - Importamos el componente `App` en `main.jsx`.
    ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { App } from './App'


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <React.Fragment>
            <App />
        </React.Fragment>
    )
    ```
    #### Observamos el resultado en el navegador:

5. ## Creamos un componente para imitar las Twitter Cards para seguir a nuevas personas.
    ### Editando los componentes:
    - Creamos un archivo `Card.jsx` en la carpeta `src/components`.
    ```jsx
        // imagen, nombre, nombre de usuario y un botton de seguir
    import RandomImage from "../assets/Perfil.png"
    import Button from "./Button"

    export function Card ({user}){
        const { name, username } = user
        return (
            <>
            <article>
                    <header>
                        <img src={ RandomImage } alt="Avatar" height={ 40 } width={ 40 } />
                        <div>
                            <strong>{ name }</strong>
                            <span>{ username }</span>
                        </div>
                    </header>
                    <Button text="Seguir" />
            </article>
            </>
        )
    }
    ```
    - Importamos el componente `Card` en `App.jsx` y creamos un mock de usuarios.
    ```jsx
    import { Card } from './components/Card';

    export function App() {

        const users = [
            {
                name: "Alejandro",
                username: "@cuenta1"
            },
            {
                name: "Melina",
                username: "@cuenta2"
            },
            {
                name: "Sofia",
                username: "@cuenta3"
            }
        ]

        return (
            <>
                <h1>Hola Mundo</h1>
                <p>Esto es un párrafo</p>
                {
                    users.map((user, index) => {
                        return (
                            <Card
                                key={index}
                                user={user}
                            />
                        )
                    })
                }
            </>
        );
    }
    ```
    #### Observamos el resultado en el navegador:
    ### Aplicando Estilos:
    - Existen multiples formas de estilar cuando usamos React:
        1. Usando `Inline CSS` a travez de la propiedad `style` de los elementos. Pero cabe aclarar que cuando usamos [jsx]() y [React]() debemos pasarle los estilos en un objeto y no como string como lo hariamos en HTML. Ademas los nombres de las propiedades deben ser camelCase y sus valores deben ser string.
        ```jsx
        <div style={{display: "flex",  color: "red", alignItems: "center" }}>Hola Mundo</div>
        ```
        2. Usando `Dinamic objects inline styles` aqui en lugar de pasarle un objeto con los estilos le pasamos una variable que contenga un objeto con los estilos. Esto tiene sus ventajas puesto que los estilos pueden cambiar dinamicamente. Es conveniente aclarar que las claves del objeto deben ser camelCase y sus valores deben ser string.
        ```jsx
        const styles = {
            display: "flex",
            color: "red",
            alignItems: "center"
        }
        <div style={styles}>Hola Mundo</div>
        ```
        3. Usando `External Style Sheet` importando un archivo `.css` en el componente. al igual que ariamos en HTML con la etiqueta `link`. Cabe aclarar que la propiedad `class` debe ser reemplazada por `className` ya que la primera es una palabra reservada en [JavaScript]() y en [JSX]() no podemos usarla.
        ```jsx
        import "./Card.css"
        /// ...
        <div className="card">Hola Mundo</div>
        ```
        4. Usando `CSS Modules` que es una forma de escribir CSS que nos permite escribir estilos que solo afecten a un componente en especifico. Para esto debemos crear un archivo `.css` con el mismo nombre del componente y agregarle el sufijo `.module` y luego importarlo en el componente.
        ```jsx
        import styles from "./Card.module.css"
        /// ...
        <div className={styles.card}>Hola Mundo</div>
        ```
