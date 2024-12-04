import React, { useState } from 'react'

const Switcher = () => {
    const[sw,setSw]=useState(false);

  return (
    <div>
        {sw? (<span>Dark</span>):(<span>Light</span>)}
        <br />
        <input type="text" key={sw? 1: 2} />
// let me explain u the imprtance of key, as we enter switch the input field gets empty becouse of the key 
has different value both for true and false 
{/* <<<<<<<<<< */}
Initial Render:

When sw is false, the key of the input is 2.
React renders the input field with the initial value (empty in this case).
Toggling the Switch:

When you click the "Switch" button, setSw toggles the sw state.
If sw becomes true, the key of the input changes from 2 to 1.

{/* <<<<<<<<<<<< */}


        <button onClick={()=>setSw((sw)=>!sw)} >Switch</button>
    </div>
  )
}

export default Switcher