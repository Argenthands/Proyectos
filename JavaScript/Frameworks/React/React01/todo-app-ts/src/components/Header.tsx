import { TodoTitle } from '../types.declarations'
import { CreateTodo } from './CreateTodo'

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header>
			<h1>
                To Do List 
				<img 
					src='https:\\upload.wikimedia.org\wikipedia\commons\thumb\4\4c\Typescript_logo_2020.svg\1200px-Typescript_logo_2020.svg.png' 
					style={{ width: '60px', height: 'auto' }}
				/>
			</h1>
			<CreateTodo saveTodo={onAddTodo} />
		</header>
	)
}