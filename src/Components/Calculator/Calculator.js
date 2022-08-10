import React, { useState } from 'react';

const Calculator = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  // const handleInput = (e) => {}

  return <div className='calculator'>
    <input 
      id='first'
      onChange={event => setFirstInput(parseFloat(event.target.value))}
      type="number"
    />

    <button
      onClick={() => setShowOutput(true)}
    >
      ×
    </button>

    <input
      id='second'
      onChange={event => setSecondInput(parseFloat(event.target.value))}
      type="number"
    />

    <span>= {showOutput ? firstInput*secondInput : ""} </span>

  </div>
};

export default Calculator;