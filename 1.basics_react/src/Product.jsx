import React from 'react'

export const Product = (props) => {
  return (
    <div>
        <h1>Name : {props.name}</h1>
        <p>Price: {props.price}</p>
    </div>
  )
}
