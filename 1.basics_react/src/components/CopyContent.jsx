import React, { useState } from 'react'
import PopUpcopy from './PopUpcopy';

const CopyContent = () => {
    const [inputvalue, setinputvalue] = useState('');
    const [copied, setcopied] = useState(false);

    const handlecopy=()=>{
        navigator.clipboard.writeText(inputvalue).then(()=>{
            setcopied(true);
            // alert("copied")
            setTimeout(() => {
                setcopied(false)
            }, 1000);
        })
    }

    return (
        <div>
            <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />
            <button onClick={handlecopy} >Copy</button>
            <PopUpcopy copied={copied}/>
        </div>
    )
}

export default CopyContent