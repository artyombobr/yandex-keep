import axios from 'axios';
import { SET_NOTES, SET_COLORS } from './types';

export const fetchAllNotes = () => {
  return (dispatch: any) => {
    return axios.get('/api/cards').then((response) =>{
      dispatch(setNotes(response.data));
    })
  }
};

export const setNotes = (notes: any) => {
  return {
    type: SET_NOTES,
    notes: notes,
  };
};

export const fetchAllColors = () => {
  return (dispatch: any) => {
    return axios.get('/api/cards').then((response) =>{
      dispatch(setColors(response.data));
    })
  }
};

export const setColors = (colors: any) => {
  return {
    type: SET_COLORS,
    colors: colors,
  };
};
