import { FLASHCARD_CREATE } from '../actions/types';

const DEFAULT_STATE = {
  data: {}
};

export const flashcardReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case FLASHCARD_CREATE:
        return [
          ...state,
          ...DEFAULT_STATE,
          {
            data: action.payload
          }
        ]
      default:
        return state
    }
  };
