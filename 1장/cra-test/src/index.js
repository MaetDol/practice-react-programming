import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// process.env.{변수 이름}
// process.env.NODE_ENV
// `npm start` 로 실행하면 development
// `npm test` 로 실행하면 test
// `npm run build` 로 실행하면 production
console.log('process.env.NODE_ENV ',         process.env.NODE_ENV );
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL );
console.log('process.env.REACT_APP_TEMP1',   process.env.REACT_APP_TEMP1 ) ;

// REACT_APP_*
// REACT_APP_API_URL=api.myapp.com npm start
// set "REACT_APP_API_URL=api.myapp.com" && npm start