import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips'; 
import Soda from './Soda';  
import Candy from './Candy'; 
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
