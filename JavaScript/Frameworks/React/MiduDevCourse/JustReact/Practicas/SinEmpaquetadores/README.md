
# [Proyecto sin empaquetadores:](https://www.youtube.com/watch?v=7iobxzd_2wY&ab_channel=midulive)

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


## 3. Anidando elementos:

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

## 4. JSX:
- JSX es una extensión de JavaScript que permite la creación de árboles DOM utilizando una sintaxis similar a XML. Creada por Facebook, está diseñada para ser utilizada con React. Los elementos JSX pueden tener atributos, hijos y expresiones.
- Son los transpiladores como SWC y Babel los que se encargan de convertir el código JSX a JavaScript. Estos funcionan por debajo de la capa del navegador, por lo que no es necesario que el navegador entienda JSX para que funcione.
- Es gracias a los empacadores como Webpack, Rollup y Parcel que podemos utilizar JSX en el navegador, ya que estos por debajo utilizan los transpiladores para convertir el código JSX a JavaScript, de forma que el navegador no necesite entender JSX para que funcione.
- JSX tambien soporta expresiones de JavaScript, por lo que podemos utilizar variables, funciones, etc. Todo dentro de llaves {}. Pero no admite sentencias de JavaScript, por lo que no podemos utilizar if, for, while, etc. Para esto podemos utilizar operadores ternarios, map, filter, etc.

# Fin del proyecto sin empaquetadores.