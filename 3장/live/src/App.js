import React, { useEffect, useState } from 'react';
import Counter from './Counter';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect( () => {
      setTimeout( () => {
        setSeconds( v => v+1 );
      }, 1000);
  });
  return (
    <div>
      { seconds % 2 === 0 && <Counter /> }
      <h1 style={{ color: seconds%2 ? 'red' : 'blue' }}>ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ</h1>
      <h2>passed {seconds} seconds</h2>
    </div>
  );
};