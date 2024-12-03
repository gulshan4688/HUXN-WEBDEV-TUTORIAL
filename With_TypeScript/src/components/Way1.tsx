// import { ReactNode } from "react"

// type UserType={
//     name:string;
//     age:number;
//     isMale:boolean;
// } 
// interface UserType{
//     name:string;
//     age:number;
//     isMale:boolean;


// } 

const Way1 = (props:{name:string;age:number;isMale:boolean}) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isMale}</h2>
    </div>
  )
}

export default Way1