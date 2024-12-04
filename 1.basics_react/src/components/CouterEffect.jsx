import React, { useState } from 'react'
import { useEffect } from "react";

const CouterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `count: ${count}`;
    })

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)} >Increament</button>
        </div>
    )
}

export default CouterEffect