import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import NotesContainers from './containers/NotesContainers';
import ArchiveContainers from './containers/ArchiveContainers';
import Footer from './components/Footer/Footer';
import NoteModal from './components/addNote/addNote';

const App = (props: any) => {
  const { isVisibleModal } = props;
  return (
    <Router>
      <Header />
      <main className="main">
        {isVisibleModal && <NoteModal />}
        <Switch>
          <Route exact path="/archive" component={ArchiveContainers} />
          <Route exact path="/" component={NotesContainers} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isVisibleModal: state.isVisibleModal,
  };
};

export default connect(mapStateToProps)(App);
