// https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md#large-applications

import typeToReducer from 'type-to-reducer';
import { FLASHCARD_CREATE } from '../actions/types';
import { DEFAULT_ASYNC_STATE } from '../constants';

const DEFAULT_STATE = {
  ...DEFAULT_ASYNC_STATE,
  data: {}
};

export const flashcardCreateReducer = typeToReducer({
  [FLASHCARD_CREATE]: {
    PENDING: () => ({
      ...DEFAULT_STATE,
      isPending: true
    }),
    REJECTED: (state, action) => ({
      ...DEFAULT_STATE,
      isRejected: true,
      error: action.payload
    }),
    FULFILLED: (state, action) => ({
      ...DEFAULT_STATE,
      isFulfilled: true,
      data: action.payload
    })
  }
}, DEFAULT_STATE);
