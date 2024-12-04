// import React from 'react'

import { FC } from "react";

// here we will used UserShape Interface
interface UserShape{
    naam:string;
    umar:number;
    isMale:boolean;
}


const Way6 : FC <UserShape> = ({naam,umar,isMale}) => {
  return (
    <div>
        <h2>{naam}</h2>
        <h2>{umar}</h2>
        <h2>{isMale}</h2>
    </div>
  )
}

export default Way6