import { Data } from "./UserContext";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

import React from 'react'

const UpdateUserCotext = () => {
  
  //importing context form data i.e, updateUser function 
  const { updateUser } = useContext(Data);
  // usestate for setting a new name 
  const [newName, setnewName] = useState('');
  // onsubmit handling 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setnewName('');
    }
  }
  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e) => { setnewName(e.target.value) }} placeholder="enter your name" />
        <button type="submit" >Update Name</button>
      </form>
    </div>
  )
}

export default UpdateUserCotext;