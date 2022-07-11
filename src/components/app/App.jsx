import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import RandomPlanet from "../../pages/randomPlanet";
import Persons from '../../pages/persons'
import Starships from '../../pages/starships';
import Planets from '../../pages/planets';
import Header from "../header";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<RandomPlanet />} />
          <Route path="persons" element={<Persons />} />
          <Route path="starships" element={<Starships />} />
          <Route path="planets" element={<Planets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
