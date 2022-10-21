import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
