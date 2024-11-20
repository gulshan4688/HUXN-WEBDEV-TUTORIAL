import React from 'react'
import { useState } from 'react'
import "../style_Todo.css"

const Todo = () => {
    const[todo,setTodo]=useState([]);
    const[task,setTask]=useState("");

  return (
    <div>Todo</div>
  )
}

export default Todo