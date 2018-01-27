// @flow

import React from "react";

// Foto Joachim Bäcker 2005/09/25 under CC BY-SA 3.0 license
// https://creativecommons.org/licenses/by-sa/3.0/
// Modifications done: Removed white background, changed filename
import shotgun from "./shotgun.png";
import "./App.css";
import { huntingSeasons } from "./helpers/fixtures/hunting_seasons";
import { ValidHuntingSeasons } from "./ValidHuntingSeasons";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={shotgun} className="App-logo" alt="shotgun" />
      <h1 className="App-title">Mitä tänään saa metsästää?</h1>
    </header>
    <ValidHuntingSeasons huntingSeasons={huntingSeasons} today={new Date()} />
    <Disclaimer />
    <IconCredits />
  </div>
);

const Disclaimer = () => (
  <div className="disclaimer">
    <p>
      Muista kuitenkin ennen metsälle lähtöä varmistaa viimeisimmät
      metsästysajat{" "}
      <a
        href="https://riista.fi/metsastys/metsastysajat/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Suomen Riistakeskuksen sivuilta
      </a>{" "}
      ja hankkia kaikki tarvittavat luvat metsästykseen.
    </p>
    <p>
      Sivuston tekijä ei ota minkäänlaista vastuuta mahdollisista virheistä tai
      niistä syntyneistä ongelmista.
    </p>
  </div>
);

const IconCredits = () => (
  <div className="iconCredits">
    Icons made by{" "}
    <a
      href="http://www.freepik.com"
      target="_blank"
      rel="noopener noreferrer"
      title="Freepik"
    >
      Freepik
    </a>{" "}
    from{" "}
    <a
      href="https://www.flaticon.com/"
      target="_blank"
      rel="noopener noreferrer"
      title="Flaticon"
    >
      www.flaticon.com
    </a>{" "}
    is licensed by{" "}
    <a
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      target="_blank"
      rel="noopener noreferrer"
    >
      CC 3.0 BY
    </a>
  </div>
);

export default App;
