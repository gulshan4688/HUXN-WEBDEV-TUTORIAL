import { createContext, useState } from "react";
import UserProfile from "./UserProfile";
import UpdateUserCotext from "./UpdateUserCotext";

// step 1 create context
const Data = createContext();

// funtional component
const UserContext = ({children}) => {

  // useState to update user data
  const [user, setUser] = useState({ name: "mani Pixels" });

 // funtion for updating name that contains setUser
  const updateUser = (newName) => {
    setUser({ name: newName })
  }

  return (
    <Data.Provider value={{ user,updateUser }} >
      {children}
    </Data.Provider>
  )
}

export { Data, UserContext };