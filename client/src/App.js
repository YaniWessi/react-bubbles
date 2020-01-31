import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/BubblePage">BubblePage</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/BubblePage" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
