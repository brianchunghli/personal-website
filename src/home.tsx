import React from 'react';

import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Home () {
  return (
    <div id="App">
      <div id="Contents">
        <Header id="Header" />
        <Intro id="Intro" />
        <Footer id="Footer" />
      </div>
      <Sidebar />
    </div>
  );
}
