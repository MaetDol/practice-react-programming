import React, { useEffect } from 'react';
import Search from './search/container/Search';
import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import User from './user/container/User';
import Login from './auth/container/Login';
import Signup from './auth/container/Signup';

export default function App() {
  useEffect(() => {
    document.getElementById('init-loading').remove();
  }, []);
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
}
