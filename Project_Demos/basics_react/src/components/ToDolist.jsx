import React, { useState } from 'react'

const ToDolist = () => {

  const [Todo, setTodo] = useState([]);
  const [inputvalue, setinputvalue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputvalue.trim()) {
      setTodo([...Todo, inputvalue]);
      setinputvalue("");
    }
  }
  const handleChange = (e) => {
    setinputvalue(e.target.value)
  }
  return (
    <div>
      <h2>Todo list </h2>
      <form onSubmit={handleSubmit} >
        <input type="text" value={inputvalue} onChange={handleChange} placeholder='enter your task' />
                                       // here on change handles changes made to input texts and sotres it into the variable inputvalue in usestates
        <button type='submit' >Submit</button>
      </form>
      <ul>
        {Todo.map((Tasks, index) =>  <li key={index} >{Tasks}</li> )}
      </ul>
    </div>
  )
}

export default ToDolist