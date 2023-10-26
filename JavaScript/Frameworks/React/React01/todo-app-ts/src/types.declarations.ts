export interface Todo {
    id: number
    title: string
    completed: boolean
}

export type TodoID = Pick<Todo, 'id'>
export type TodoTitle = Omit<Todo, 'id' | 'completed'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Array<Todo> // or Todo[]