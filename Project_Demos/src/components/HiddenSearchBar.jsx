import React, { useState } from 'react'
import "../style_HiddenSearchBar.css"
import { FaSearch } from "react-icons/fa"
const HiddenSearchBar = () => {

    const [showInput, setShowinput] = useState(false);
    const [bgColor, setBgcolor] = useState('white');
    const handleClick=(e)=>{
        setBgcolor("#1a1a1a");

        if(e.target.className==="container"){
            setShowinput(false);
            setBgcolor("#fff");
        }
    }

    return (
        <section className='container' style={{ backgroundColor: bgColor }} onClick={handleClick}  >

            {showInput ? (<input type='text' placeholder='Search...' />) : (<FaSearch onClick={() => setShowinput(true)} />)}

        </section>
    )
}

export default HiddenSearchBar;