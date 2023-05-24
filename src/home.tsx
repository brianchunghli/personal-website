import React, { useState } from 'react';

import Intro from './components/Intro';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Home () {
  return (
    <>
      <div className="contents">
        <div>
          <Intro id="Intro" />
          <Footer id="Footer" />
        </div>
      </div>
      <Sidebar />
    </>
  );
}
