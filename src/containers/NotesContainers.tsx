import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter';
import Notes from '../components/Notes/Notes';

const NotesContainer = (props: any) => {
  const { displayNotes, colors } = props;
  return (
    <>
      <Filter />
      <Notes colors={colors} notes={displayNotes} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    displayNotes: state.displayNotes,
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(NotesContainer);
