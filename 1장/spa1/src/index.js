import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
      window.onpopstate = (event) => {
        console.log(`location ${document.location}, state: ${event.state}`)
        setPageName( event.state );
      };
  }, []);
  function onClick() {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1');
    setPageName( pageName );
  }
  function onClick2() {
    const pageName = 'page2';
    window.history.pushState(pageName, '', '/page2');
    setPageName( pageName );
  }
  return (
    <div>
      <button onClick={onClick}>
        page1
      </button>
      <button onClick={onClick2}>
        page2
      </button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>여기는 홈페이지입니다.</h2>;
}
function Page1() {
  return <h2>여기는 Page1입니다.</h2>
}
function Page2() {
  return <h2>여기는 Page2입니다.</h2>
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);