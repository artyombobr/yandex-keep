// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';
import data from './shri.json';

const App = () => {
  // const [notes, setNotes] = useState([]);
  //
  // useEffect(() => {
  //   axios.get('/api/cards')
  //     .then(function(response): void {
  //       console.log(response.data);
  //       setNotes(response.data);
  //     });
  // }, []);

  return (
    <div>
      <Header />
      <main className='main'>
        test
        <Filter colors={data.colors} />
        <Notes data={data} notes={data.notes} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
