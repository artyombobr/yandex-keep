import {
  SET_ALL_NOTES,
  SET_COLORS,
  SET_DISPLAY_NOTES,
  SET_TAGS,
} from '../actions/types';

const defaultState = {
  displayNotes: [],
  allNotes: [],
};

const mainReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_ALL_NOTES:
      return { ...state, allNotes: action.allNotes };
    case SET_DISPLAY_NOTES:
      return { ...state, displayNotes: action.displayNotes };
    case SET_COLORS:
      return { ...state, colors: action.colors };
    case SET_TAGS:
      return { ...state, tags: action.tags };
    default:
      return state;
  }
};

export default mainReducer;
