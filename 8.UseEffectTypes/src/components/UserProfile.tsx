import { useState } from "react";

const UserProfile = () => {

  interface UserType {
    id: number;
    name: string;
  }

  const [userInfo, setUserInfo] = useState<UserType>(
    {
      id: 0,
      name: "",
    });
  const updateName = (name: string) => {
    setUserInfo(prevProfile => ({ ...prevProfile, name }));
  }
  const updateId=(id:string)=>{
    setUserInfo((prevProfile)=>({...prevProfile,id:Number(id)}))
  }

  return (
    <div>
      <h2>User Info</h2>
      <input type="number" placeholder="id" value={userInfo.id>0?userInfo.id:''}  onChange={e => updateId(e.target.value)} />
      <input type="text" placeholder="Name" value={userInfo.name} onChange={e => updateName(e.target.value)} />
      <p>id:{userInfo.id}</p>
          <p>name:{userInfo.name}</p>
    </div>
  )
}

export default UserProfile