// import React from 'rea

const Button = (props:{label:string; onclick:()=> void ; disabled:boolean}) => {
  return (
    <div>
        <button onClick={props.onclick} disabled={props.disabled} >{props.label}</button>
    </div>
  )
}

export default Button