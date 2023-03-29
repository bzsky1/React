import React, {useState} from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
      setCount(count + 1)
    }
  
    const decrement = () => {
      setCount(count - 1)
    }
  
  
    return (
      <div className='func'>
        <h4>Functional component</h4>
        <h1>{count}</h1>
        <div className='buttons'>
          <button onClick={increment}>Increment</button>
          <button className='decbtn' onClick={decrement}>Decrement</button>
        </div>
      </div>
    )
}

export default FunctionalCounter;