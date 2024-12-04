// import React from 'react'
type UserType={
    naam:string;
    umar:number;
    isMale:boolean;
}

const Way3 = ({naam,umar,isMale}:UserType) => {
  return (
    <div>
        <h2>{naam}</h2>
        <h2>{umar}</h2>
        <h2>{isMale}</h2>
    </div>
  )
}

export default Way3