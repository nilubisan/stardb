import React from "react";

import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import Persons from '../persons/Persons'
import "./app.css";

const App = () => {
  return (
      <div className="main">
        <Header />
        <Persons />
      </div>
  );
};

export default App;
