import { useState } from "react"

const Todo = () => {

    interface todoType {
        id: number;
        task: string;
        completed: boolean;
    }
    const [todos, setTodos] = useState<todoType[]>([]);

    const addTodo = (task: string) => {
        // setTodos((prevTodo)=>({...prevTodo,task}))
        const newTodo: todoType = {
            id: todos.length + 1,
            task,
            completed: false
        }
        setTodos((prevTodos) => ([ ...prevTodos, newTodo ]))
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <button onClick={() => addTodo('new todo')} >Add taskkk..!!</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} >{todo.id} {todo.completed ? ('completed') : ('Incompleted')}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo