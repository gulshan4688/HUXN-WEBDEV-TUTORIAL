import {createPortal} from "react-dom"

const PopUpcopy = ({copied}) => {
  return createPortal(
    <div>
        {copied && (
            <span style={{backgroundColor:'red', fontSize:'1rem'}} >copied to clipboard</span>
        )}
    </div>,
    document.querySelector("#popup-content")
  )
}

export default PopUpcopy