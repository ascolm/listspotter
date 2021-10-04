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
          <Route path={process.env.REACT_APP_ENV === 'development' ? '/' : '/main'}>
            <Main/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
