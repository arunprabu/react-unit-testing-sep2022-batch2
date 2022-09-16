import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if(counter < 10){
      setCounter(counter + 1);  
    }
  }

  const handleDecrement = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h2>Counter | Testing click | state update with condition</h2>
      <p data-testid='counterValue'>{counter}</p>
      <button data-testid="incrementBtn" onClick={handleIncrement}>+</button>
      <button data-testid="decrementBtn" onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter