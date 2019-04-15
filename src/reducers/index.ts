import { SET_NOTES, SET_COLORS, SET_TAGS } from '../actions/types';

  const defaultState={
  notes: []
};

const mainReducer = (state = defaultState,action: any)=>{
  switch (action.type) {
    case SET_NOTES:
      return {...state, notes: action.notes};
    case SET_COLORS:
      return {...state, colors: action.colors};
    case SET_TAGS:
      return {...state, tags: action.tags};
    default:
      return state;
  }
};

export default mainReducer;
