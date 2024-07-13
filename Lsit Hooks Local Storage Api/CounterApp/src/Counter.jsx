import React, { useState } from 'react';
import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <h1>Counter App</h1>
        <div className="count">{count}</div>
        <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="decrement" onClick={() => setCount(count < 0 ? count -1 : 0 )} >Decrement</button>
      </div>
    </>
  )
}

export default Counter
