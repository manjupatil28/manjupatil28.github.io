// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
