
import { useState } from 'react'
import { Todos } from './components/Todos'
import { 
	//type TodoCompleted, 
	type TodoID, 
	type Todo as TodoType 
} from './types.declarations'

const mockTodos = [
	{
		id: 1,
		title: 'Crear un proyecto con vite todo-list con React y TypeScript',
		completed: true
	},
	{
		id: 2,
		title: 'Crear la base de datos PostgreSQL',
		completed: false
	},
	{
		id: 3,
		title: 'Crear la api rest con Node.js y Express',
		completed: false
	},
	{
		id: 4,
		title: 'Crear otra appi rest con Python y Flask',
		completed: false
	},
	{
		id: 5,
		title: 'Crear la app con React Native',
		completed: false
	},
	{
		id: 6,
		title: 'Crear la base de datos con MongoDB',
		completed: false
	},
	{
		id: 7,
		title: 'Crear una api rest usando TDD con Jest',
		completed: false
	}
]

//const App = (): JSX.Element => {
const App: React.FC = () => {

	const [todos, setTodos] = useState(mockTodos)

	const handleRemove = ({ id }: TodoID): void => {
		const newTodos = todos.filter(t => t.id !== id)
		setTodos(newTodos)
	}

	const handleCompleted = (
		//{ id, completed }: {id: TodoID, completed: TodoCompleted}
		{ id, completed }: Pick<TodoType, 'id' | 'completed'>
	): void => {
		const newTodos = todos.map(t => {
			if (t.id === id){
				return { ...t, completed}
			}
			return t
		})
		setTodos(newTodos)
	}
	return (
		<div className='todoapp'>
			<Todos 
				todos = { todos }
				onRemoveTodo = { handleRemove }
				onToggleCompletedTodo = { handleCompleted }
			/>
		</div>
	)
}

export default App
