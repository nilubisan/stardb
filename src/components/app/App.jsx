import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Promo from "../../pages/promo";
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
          <Route path="/" element={<Promo />} />
          <Route path="persons" element={<Persons />} />
          <Route path="starships" element={<Starships />} />
          <Route path="planets" element={<Planets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
