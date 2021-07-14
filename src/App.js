import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./components/Main";
import Nasa from "./components/Nasa";
import Navbar from "./components/Navbar";

import history from "./history";

const App = () => {
  return (
    <div className="app">
      <div className="ui container">
        <Router history={history}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/nasa" exact component={Nasa} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
