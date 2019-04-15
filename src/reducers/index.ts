import { SET_NOTES } from '../actions/types';

  const defaultState={
  notes: []
};

const mainReducer = (state = defaultState,action: any)=>{
  switch (action.type) {
    case SET_NOTES:
      return {...state, notes: action.notes};
    default:
      return state;
  }
};

export default mainReducer;
