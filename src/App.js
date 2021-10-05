import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
