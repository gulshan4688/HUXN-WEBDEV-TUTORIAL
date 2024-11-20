import { createContext } from 'react';
import {  UserContext } from './components/UserContext';
import UserProfile from './components/UserProfile';
import UpdateUserCotext from './components/UpdateUserCotext';


function App() {

  const name = "manu";
  const age = 23;
  const id = 1;
  return (
    <section>
      <UserContext >
        <UserProfile />
        <UpdateUserCotext/>
      </UserContext>
    </section>
  )
}

export default App
