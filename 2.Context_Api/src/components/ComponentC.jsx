import React from 'react'
import { Data, Data1 } from '../App'
import { useContext } from 'react'

const ComponentC = () => {
    const {name,age} = useContext(Data);
    const id = useContext(Data1);
    return (
        <section>
            <h2>name:{name}</h2>
            <h2>age:{age}</h2>
            <h2>id:{id}</h2>
        </section> 
    )
}

export default ComponentC