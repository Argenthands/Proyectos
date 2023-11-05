
# Proyecto sin empaquetadores:

## 1. Creando el proyecto:

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

## 2. Renderizando el primer elemento:

### Creando el index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React without bundler</title>
</head>
<body>
    <div id="app"></div><!-- Contenedor de la aplicación -->
    <script src="./index.js" type="module"></script><!-- Módulo de JavaScript -->
</body>
</html>
```
#### Explicación:
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
#### Explicación:
    - Importamos la libreria de react y el modulo de react-dom.
    - Obtenemos el elemento con el id="app".
    - Creamos el root (raiz) de nuestra aplicación.
    - El metodo de React createElement recibe los siguientes parametros:
        - El tipo de elemento que queremos crear. En este caso un button.
        - Las propiedades del elemento. En este es null, pero espera un objeto con las propiedades del elemento.
        - El contenido del elemento. En este caso el texto "Click me!".
    - Renderizamos el elemento button en el root de nuestra aplicación.


## 2. Anidando elementos:

### Modificando el index.js para anidar elementos:

```javascript
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById("app")

const root = ReactDOM.createRoot(appDomElement)

//Creados 3 elementos para renderizar
const button1 = React.createElement('button', {"class" : "btn", "data-id" : 123}, '[1] Click me!')
const button2 = React.createElement('button', {"class" : "btn", "data_id" : 456}, '[2] Click me!')
const button3 = React.createElement('button', {"class" : "btn", "data-1d" : 789}, '[3] Click me!')

//Creamos un elemento div que contiene los 3 botones
const div = React.createElement(React.Fragment, null, [button1, button2, button3])
root.render(div)
```
#### Explicación:
    - Creamos 3 elementos de tipo button con sus respectivas propiedades y contenido.
    - Creamos un elemento div, pero en este caso le pasamos como primer parametro React.Fragment para que sea un Fragment de React y como tercer parametro un array con los 3 botones.
    - Renderizamos el elemento div que es en realidad un Fragment de React en el root de nuestra aplicación.

