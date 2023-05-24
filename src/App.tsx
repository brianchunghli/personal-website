import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './home';
import Header from './components/Header';
import Uni from './components/Uni';

function App () {
  return (
    <>
      <Header id="Header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uni" element={<Uni />} />
      </Routes>
    </>
  );
}

export default App;
