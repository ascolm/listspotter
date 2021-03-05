import React from 'react';
import Login from './components/Login/login-index';
import Main from './components/Main/main-index';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/">
            <Main/> {/* DISABLED LOGIN FOR TESTING, REMOVE THIS LINE & UNCOMMENT BELOW */}
            {/* <Login /> */}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
