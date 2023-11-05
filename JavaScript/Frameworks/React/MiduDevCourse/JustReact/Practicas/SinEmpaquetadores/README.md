
# Proyecto sin empaquetadores:

## 1. Creando el proyecto

### Creando el voileplate

#### Windows

```powershell
New-Item -ItemType Directory -Path "./react-without-bundler"
cd react-without-bundler
New-Item -ItemType File -Name index.html
New-Item -ItemType File -Name index.js
```

#### Linux

```bash
mkdir react-without-bundler
cd react-without-bundler
touch index.html
touch index.js
```

### Creando el index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React without bundler</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="app"></div><!-- Contenedor de la aplicación -->
    <script src="./index.js" type="module"></script><!-- Módulo de JavaScript -->
</body>
</html>
```
#### Explicación
    - Creamos un elemento div con el id="app" para que sea el contenedor de nuestra aplicación.
    - El atributo type="module" le dice al navegador que el archivo index.js es un módulo de JavaScript.


### Creando el index.js

```javascript
import React from "https://esm.sh/react@18.2.0" //importamos la libreria de react
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client" //importamos el modulo de la libreria de react

const appDomElement = document.getElementById("app") //obtenemos el elemento con el id="app"

const root = ReactDOM.createRoot(appDomElement) //creamos el root (raiz) de nuestra aplicación

const button = React.createElement('button', null, 'Click me!') //creamos un elemento de tipo button

root.render(button) //renderizamos el elemento button en el root de nuestra aplicación
```
#### Explicación
    - Importamos la libreria de react y el modulo de react-dom.
    - Obtenemos el elemento con el id="app".
    - Creamos el root (raiz) de nuestra aplicación.
    - El metodo de React createElement recibe los siguientes parametros:
        - El tipo de elemento que queremos crear. En este caso un button.
        - Las propiedades del elemento. En este es null, pero espera un objeto con las propiedades del elemento.
        - El contenido del elemento. En este caso el texto "Click me!".
    - Renderizamos el elemento button en el root de nuestra aplicación.

### Creando el style.css

```css
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

## 2. Anidando elementos