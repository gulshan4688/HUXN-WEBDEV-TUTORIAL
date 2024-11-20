import {useContext} from "react";
import { Data } from "./UserContext";

import React from 'react'

const UserProfile = () => {
    
    // destructoring the info from data which is a context in UserContext.jsx
    const {user} = useContext(Data)

  return (
    <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        
    </div>
  )
}

export default UserProfile;