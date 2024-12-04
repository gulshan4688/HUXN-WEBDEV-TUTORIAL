// import React from 'react'
import { adminInfoList } from "../Types"

interface adminInfoProps{
  admin:adminInfoList;
}

const AdminInfo:React.FC<adminInfoProps> = ({admin}) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>id:{admin.id}</p>
      <p>Name:{admin.name}</p>
      <p>Email:{admin.email}</p>
      <p>Role:{admin.role}</p>
      <p>Login data:{admin.loginData.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo