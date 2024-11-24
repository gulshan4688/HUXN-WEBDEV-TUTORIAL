import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setitems] = useState([]);
    const [name, setname] = useState('');
    const [quantity, setquantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            name,
            quantity: parseInt(quantity)
        };
        setitems((prevItems) => [...prevItems, newItem])
        setname("")
        setquantity('');
    }

    return (
        <section>
            <div>
                <h2>Shoppping list</h2>
                <form action="submit" onSubmit={handleSubmit}>
                    <input type="text" placeholder='enter item' value={name} onChange={e => setname(e.target.value)} />
                    <input type="number" placeholder='quantity' value={quantity} onChange={e => setquantity(e.target.value)} />
                <button>Add Item</button>
                </form>
            </div>
            <ul>
                {items.map((items, index) => {
                    return <li key={index}>Name: {items.name} Quantity: {items.quantity} </li>
                })}
            </ul>
        </section>
    )
}

export default ShoppingList