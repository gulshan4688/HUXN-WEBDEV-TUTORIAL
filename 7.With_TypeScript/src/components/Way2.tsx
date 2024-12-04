// import React from 'react'

const User1 = ({naam,umar,isMale}:{naam:string;umar:number;isMale:boolean}) => {
  return (
    <div>
        <h2>{naam}</h2>
        <h2>{umar}</h2>
        <h2>{isMale}</h2>
    </div>
  )
}

export default User1