// @flow

import React, { Component } from "react";

// Foto Joachim Bäcker 2005/09/25 under CC BY-SA 3.0 license
// https://creativecommons.org/licenses/by-sa/3.0/
// Modifications done: Removed white background, changed filename
import shotgun from "./shotgun.png";
import "./App.css";
import { huntingSeasons } from "./helpers/fixtures/complete_parsed_hunting_seasons";
import { ValidHuntingSeasons } from "./ValidHuntingSeasons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={shotgun} className="App-logo" alt="shotgun" />
          <h1 className="App-title">Mitä tänään saa metsästää?</h1>
        </header>
        <ValidHuntingSeasons huntingSeasons={huntingSeasons} />
      </div>
    );
  }
}

export default App;
