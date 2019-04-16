import axios from 'axios';
import {
  SET_ALL_NOTES,
  SET_COLORS,
  SET_TAGS,
  SET_DISPLAY_NOTES,
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

export const setAllNotes = (allNotes: any) => {
  return {
    type: SET_ALL_NOTES,
    allNotes,
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
