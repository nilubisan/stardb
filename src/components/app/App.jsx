import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import Persons from '../persons/Persons'
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<RandomPlanet />} />
          <Route path="persons" element={<Persons />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
