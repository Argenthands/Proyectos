import { TodoID, type Todo as TodoType } from '../types.declarations'

interface Props extends TodoType {
	onRemoveTodo: ({ id }: TodoID) => void
	onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {

	const handleChangeChckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onToggleCompletedTodo({
			id,
			completed: event.target.checked
		})
	}

	return (
		<div className="view">
			<input
				type="checkbox"
				className="toggle"
				checked={completed}
				/*onChange={(event) => {
					onToggleCompletedTodo({ id, completed: event?.target.checked})
				}}*/
				onChange={handleChangeChckbox}
			/>
			<label>{title}</label>
			<button 
				className="destroy"
				onClick={() => {
					onRemoveTodo({ id })
				}}
			></button>
		</div>
	)
}