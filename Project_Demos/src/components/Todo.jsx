import React from 'react'
import { useState } from 'react'
import "../style_Todo.css"

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // setTodo({...Todo,task});
        setTodo(() => {
           return todo.concat({
                text: task,
                id: Math.floor(Math.random() * 10)
            });
        });
        setTask("");
    };
    const removeTodo = id => {
        setTodo((todo) => todo.filter((t) => t.id !== id))
    }


    return (
        <div className='container'>
            <input type="text" placeholder='enter your Task' value={task} onChange={(e)=>setTask(e.target.value) } />
            <button onClick={handleSubmit} >Submit</button>
            <ul className='todos-list'>
                {todo.map(({ text, id }) => {
                    return <li className='todo' key={id} >{text}
                        <button className='close' onClick={() => removeTodo(id)} >X</button>
                    </li>
                })}
            </ul>

        </div>

    )
}

export default Todo