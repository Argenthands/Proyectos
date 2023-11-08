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