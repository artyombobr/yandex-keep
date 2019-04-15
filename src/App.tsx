// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        {/*<Filter colors={data.colors} />*/}
        <Notes />
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default App;
