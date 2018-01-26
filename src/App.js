// @flow

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { huntingSeasons } from "./helpers/fixtures/complete_parsed_hunting_seasons";
import { ValidHuntingSeasons } from "./ValidHuntingSeasons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mitä tänään saa metsästää?</h1>
        </header>
        <ValidHuntingSeasons huntingSeasons={huntingSeasons} />
      </div>
    );
  }
}

export default App;
