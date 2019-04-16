import axios from 'axios';
import {
  SET_ALL_NOTES,
  SET_COLORS,
  SET_TAGS,
  SET_DISPLAY_NOTES,
  SET_ARCHIVE_NOTES,
  TOGGLE_MODAL,
} from './types';

export const fetchAllNotes = () => {
  return (dispatch: any) => {
    return axios
      .get('/api/cards')
      .then(response => {
        dispatch(setAllNotes(response.data));
        dispatch(setDisplayNotes(response.data));
      })
      .catch((error: any) => {
        throw error;
      });
  };
};

export const fetchArchiveNotes = () => {
  return (dispatch: any) => {
    return axios
      .get('/api/cards/archive')
      .then(response => {
        dispatch(setArchiveNotes(response.data));
      })
      .catch((error: any) => {
        throw error;
      });
  };
};

export const setAllNotes = (allNotes: any) => {
  return {
    type: SET_ALL_NOTES,
    allNotes,
  };
};

export const setArchiveNotes = (archiveNotes: any) => {
  return {
    type: SET_ARCHIVE_NOTES,
    archiveNotes,
  };
};

export const fetchNoteToArchive = (id: any) => {
  return (dispatch: any) => {
    return axios
      .post('/api/cards/archive/' + id)
      .then(response => {
        dispatch(fetchAllNotes());
      })
      .catch((error: any) => {
        throw error;
      });
  };
};

export const fetchAddNote = (note: any) => {
  return (dispatch: any) => {
    return axios
      .post('/api/cards/', note)
      .then(response => {
        dispatch(fetchAllNotes());
      })
      .catch((error: any) => {
        throw error;
      });
  };
};

export const setDisplayNotes = (displayNotes: any) => {
  return {
    type: SET_DISPLAY_NOTES,
    displayNotes,
  };
};

export const fetchAllColors = () => {
  return (dispatch: any) => {
    return axios.get('/api/colors').then(response => {
      dispatch(setColors(response.data));
    });
  };
};

export const setColors = (colors: any) => {
  return {
    type: SET_COLORS,
    colors,
  };
};

export const fetchAllTags = () => {
  return (dispatch: any) => {
    return axios.get('/api/tags').then(response => {
      dispatch(setTags(response.data));
    });
  };
};

export const setTags = (tags: any) => {
  return {
    type: SET_TAGS,
    tags,
  };
};

export const toggleModal = (flag: boolean) => {
  return {
    type: TOGGLE_MODAL,
    isVisibleModal: flag,
  };
};
