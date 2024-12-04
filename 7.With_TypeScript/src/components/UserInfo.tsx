// // import React from 'react'
import { info } from "../Types";

interface userInfoProp {
  user: info;
}

const UserInfo: React.FC<userInfoProp> = ({ user }) => {
  return (
    <div>
      <h2>User Data</h2>
      <p>id:{user.id}</p>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};

export default UserInfo;
