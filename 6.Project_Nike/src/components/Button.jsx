import React from 'react'

const Button = ({onClinkHandler,value,title}) => {
  return (
    <div>
      <button onClick={onClinkHandler} value={value} className='btns'>{title}</button>
    </div>
  )
}

export default Button