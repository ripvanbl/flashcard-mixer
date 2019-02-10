import { combineReducers } from 'redux';
import { flashcardCreateReducer } from './flashcardCreate';
import { flashcardFetchAllReducer } from './flashcardFetchAll';

export default combineReducers({
  flashcards: combineReducers({
    create: flashcardCreateReducer,
    fetchAll: flashcardFetchAllReducer
  })
});
