import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter';
import Notes from '../components/Notes/Notes';

const NotesContainer = (props: any) => {
  const { visibleNotes, colors } = props;
  return (
    <>
      <Filter />
      <Notes colors={colors} notes={visibleNotes} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    visibleNotes: state.visibleNotes,
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(NotesContainer);
