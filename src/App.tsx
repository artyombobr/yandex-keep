import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';
import NoteModal from './components/NoteModal/NoteModal';

const App = () => {
  return (
    <div>
      <Header />
      {/* <NoteModal /> */}
      <main className="main">
        <Filter />
        <Notes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
