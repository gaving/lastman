import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Fixtures from "./components/Fixtures/Fixtures";
import Header from "./components/Header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fixtures/:id?" component={Fixtures} />
        </Switch>
      </div>
    );
  }
}

export default App;
