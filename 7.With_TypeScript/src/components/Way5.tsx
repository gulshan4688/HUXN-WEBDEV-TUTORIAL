// import React from 'react'

import { ReactNode } from "react"
interface UserType{
    children:ReactNode;
}

const Way5 = ({children}:UserType) => {
  return (
    <div>{children}</div>
  )
}

export default Way5