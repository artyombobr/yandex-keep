import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes/Notes';
import { fetchArchiveNotes } from '../actions';

const ArchiveContainer = (props: any) => {
  const { archiveNotes, colors, dispatch } = props;

  useEffect(() => {
    dispatch(fetchArchiveNotes());
    console.log(props);
  }, []);

  return <Notes colors={colors} notes={archiveNotes} />;
};

const mapStateToProps = (state: any) => {
  return {
    archiveNotes: state.archiveNotes,
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(ArchiveContainer);
