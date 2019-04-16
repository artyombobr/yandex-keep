import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import NotesContainers from './containers/NotesContainers';
import ArchiveContainers from './containers/ArchiveContainers';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/archive" component={ArchiveContainers} />
          <Route exact path="/" component={NotesContainers} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
