import { type TODO_FILTERS } from './consts'

export interface Todo {
    id: string
    title: string
    completed: boolean
}

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
export interface FooterProps {
    activeCount: number
    completedCount: number
    //todos: ListOfTodos
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void,
}

export type TodoID = Pick<Todo, 'id'>
export type TodoTitle = Omit<Todo, 'id' | 'completed'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Array<Todo> // or Todo[]
