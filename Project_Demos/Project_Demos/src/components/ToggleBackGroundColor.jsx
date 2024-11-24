import React, { useState } from 'react'
import "../style_Toggle.css"

const ToggleBackGroundColor = () => {

    const [backgroundColor, setBackgroundcolor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [buttonStyle, setButtonStyle] = useState("white");
    const handleclick = () => {
        setBackgroundcolor(backgroundColor === 'white' ? "#1b1b1b" : "white");
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
        setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white');
    }

    return (
        <div style={{ backgroundColor, color: textColor }} >
            <button onClick={handleclick} style={{ backgroundColor: buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>
                {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
            </button>
            <section>
                <h1>Welcome to the <br />
                    real world...</h1>
            </section>
        </div>
    )
}

export default ToggleBackGroundColor