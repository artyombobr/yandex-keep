import {
  SET_ALL_NOTES,
  SET_ARCHIVE_NOTES,
  SET_COLORS,
  SET_DISPLAY_NOTES,
  SET_TAGS,
  TOGGLE_MODAL,
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
    case SET_ARCHIVE_NOTES:
      return { ...state, archiveNotes: action.archiveNotes };
    case SET_COLORS:
      return { ...state, colors: action.colors };
    case SET_TAGS:
      return { ...state, tags: action.tags };
    case TOGGLE_MODAL:
      return { ...state, isVisibleModal: action.isVisibleModal };
    default:
      return state;
  }
};

export default mainReducer;
