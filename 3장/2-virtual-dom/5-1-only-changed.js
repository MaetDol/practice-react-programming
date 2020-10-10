import React, { useEffect, useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect( () => {
      setTimeout( () => {
        setSeconds( v => v+1 );
      }, 1000);
  });
  return (
    <div>
      <h1>ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ</h1>
      <h2>passed {seconds} seconds</h2>
    </div>
  );
};