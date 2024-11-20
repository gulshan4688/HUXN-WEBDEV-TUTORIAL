import React from 'react'
import { useState } from 'react'
import "../style_Todo.css"

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // setTodo({...Todo,task});
        // NAYA CHEEZ PATA LAGA ❤️❤️❤️❤️
        //  THAT how to concat an objects of array 
        // so basically we are adding an object to an array to make it an array of objects
        setTodo(() => {
            return todo.concat({
                input_text: task,
                id: Math.floor(Math.random() * 10)
            });
        });
        setTask("");
    };
    const removeTodo = id => {
        setTodo((todo) =>
            todo.filter((t) =>
                t.id !== id))
        // when this above condtion gets false then an object is removed from the arrray  
    }


    return (
        <div className='container'>
            <input type="text" placeholder='enter your Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleSubmit} >Submit</button>
            <ul className='todos-list'>
                {todo.map(({ input_text, id }) => {
                    return <li className='todo' key={id} >{input_text}
                        <button className='close' onClick={() => removeTodo(id)} >X</button>
                    </li>
                })}
            </ul>

        </div>

    )
}

export default Todo