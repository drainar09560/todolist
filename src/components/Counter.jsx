import React, { useState } from 'react';

const Counter = () => {

    const [count, setCounter] = useState(0)
    const [title, setTitle] = useState('Counter')

    const increment = () => {
        setCounter( count + 1)
    }
    const decrement = () => {
        setCounter( count - 1)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1><p>{title}:</p> {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" name="" id="" value={title} onChange={event => setTitle(event.target.value)} />
        </div>
    );
};

export default Counter;
