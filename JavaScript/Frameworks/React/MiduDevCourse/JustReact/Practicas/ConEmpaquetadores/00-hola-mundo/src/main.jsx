import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Components/Button'

const buttons = ["Botón 1", "Botón 2", "Botón 3"]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.Fragment>
		<h1>Hola Mundo</h1>
		<p>Esto es un párrafo</p>
		<Button text="Click" />
		<div>
			{buttons.map((text, index) => (
				<Button key={index} text={text} />
			))}
		</div>
	</React.Fragment>
)
