import React from 'react';
import Login from './components/Login/login-index';
import Main from './components/Main/main-index';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
