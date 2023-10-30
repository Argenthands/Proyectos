import { FilterValue, /*ListOfTodos*/ } from '../types.declarations'
import { Filters } from './Filters'

interface Props {
    activeCount: number
    completedCount: number
    //todos: ListOfTodos
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void,
}


export const Footer: React.FC<Props> = ({ 
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted
}) => {
	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong> { activeCount } </strong> Tareas Pendientes
			</span>

			<Filters
				filterSelected={ filterSelected }
				onFilterChange={() => {}}
			/>
		</footer>


	)
}
