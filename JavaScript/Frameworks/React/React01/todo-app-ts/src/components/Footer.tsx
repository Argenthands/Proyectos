import { 
	//FilterValue, 
	FooterProps	
	/*ListOfTodos*/ 
} from '../types.declarations'
import { Filters } from './Filters'

/*
interface Props {
    activeCount: number
    completedCount: number
    //todos: ListOfTodos
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void,
}
*/
export const Footer: React.FC<FooterProps> = ({ 
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted
}) => {
	return (
		<footer className='footer'>
			{
				activeCount > 0 && (
					<span className='todo-count'>
						<strong> { activeCount } </strong> Tareas Pendientes
					</span>
				)
			}

			<Filters
				filterSelected={ filterSelected }
				onFilterChange={handleFilterChange}
			/>

			{
				completedCount > 0 && (
					<button
						className='clear-completed'
						onClick={ onClearCompleted }
					>
						Borrar Completadas
					</button>
				)
			}
		</footer>
	)
}
