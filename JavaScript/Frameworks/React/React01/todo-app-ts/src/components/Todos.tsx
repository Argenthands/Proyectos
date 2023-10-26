import { Todo } from './Todo'
import { 
	type ListOfTodos, 
	type TodoID, 
	type Todo as TodoType
} from '../types.declarations'

interface Props {
    todos: ListOfTodos
	onRemoveTodo: (id: TodoID) => void
	onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
	return (
		<ul className='todo-list'>
			{todos.map(todo => (
				<li 
					key={todo.id}
					className={`${todo.completed ? 'completed' : ''}`}>
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						onRemoveTodo={onRemoveTodo}
						onToggleCompletedTodo={onToggleCompletedTodo}
					/>
				</li>
			))}
		</ul>
	)
}