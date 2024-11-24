import { useState } from 'react'
import "../style_Accordion.css"

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='accordion' key={Math.random()} >
            <div className="header" onClick={() => setIsActive(!isActive)} >
                <div>{title}</div>
                <div className="icon">{isActive ? '-' : '+'}</div>
            </div>
        </div>
    )
}

export default Accordion