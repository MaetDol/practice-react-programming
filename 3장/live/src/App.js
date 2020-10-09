import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue');
  }
  return (
    <>
      <p>안녕</p>
      {ReactDOM.createPortal(
        <div>
          <p>안녕하세요</p>
          <p>실전 리액트 프로그래밍 입니다.</p>
        </div>,
        document.getElementById('something'),
      )}
    </>
  );
}

export default App;