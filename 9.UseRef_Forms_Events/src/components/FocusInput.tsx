import { useRef } from "react";

const FocusInput = () => {
  // const inputElement=useRef<type>(null);
    const inputElement=useRef<HTMLInputElement>(null);
    const focusHandler=()=>{
      //focuses on the inputElement 
        inputElement.current!.focus();
        // with focusing on the input it also sets input value as "mani"
        inputElement.current!.value="mani";
    }

  return (
    <div>
        <input type="text" ref={inputElement}  />
        <button onClick={focusHandler} >Focus</button>
    </div>
  )
}

export default FocusInput