import { useState } from 'react'
import { TodoTitle } from '../types.declarations'

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {

	const [InvputValue, setInvputValue] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		saveTodo({ title: InvputValue })
		setInvputValue('')
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				className='new-todo'
				value={ InvputValue}
				onChange={(e)=>{ setInvputValue(e.target.value) }}
				placeholder='¿Qué otra tarea quieres hacer?'
				autoFocus
			>
			</input>
		</form>
	)
}