import { SET_NOTES, SET_COLORS } from '../actions/types';

  const defaultState={
  notes: []
};

const mainReducer = (state = defaultState,action: any)=>{
  switch (action.type) {
    case SET_NOTES:
      return {...state, notes: action.notes};
    case SET_COLORS:
      return {...state, colors: action.colors}
    default:
      return state;
  }
};

export default mainReducer;
