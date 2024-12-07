import { useRef } from "react";

const FocusInput = () => {
    const inputElement=useRef<HTMLInputElement>(null);

    const focusHandler=()=>{
        inputElement.current!.focus();
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