import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <>
      <button style={{ backgroundColor: color }} onClick={onClick}>
        좋아요
      </button>
      <Counter />
      <Counter />
    </>
  );
}

export default App;