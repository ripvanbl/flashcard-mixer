// https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md

import { FLASHCARD_CREATE, FLASHCARD_FETCHALL } from './types';

export const createFlashcardAction = params => ({
  type: FLASHCARD_CREATE,
  payload: new Promise(async (resolve, reject) => {
    await setTimeout(() => {
      try {
        const newItem = {...params, id: Math.round(new Date().getTime() / 1000)};
        const items = JSON.parse(sessionStorage.getItem('flashcards')) || [];
        
        items.push(newItem);
        
        sessionStorage.setItem('flashcards', JSON.stringify(items));
        resolve(newItem);
      } catch(e) {
        reject(e);
      }
    }, 2000);
  })
});

export const fetchAllFlashcardsAction = params => ({
  type: FLASHCARD_FETCHALL,
  payload: new Promise(async (resolve, reject) => {
    await setTimeout(() => {
      try {
        const items = JSON.parse(sessionStorage.getItem('flashcards')) || [];
        // TODO: Limit items with params
        resolve(items);
      } catch(e) {
        reject(e);
      }
    }, 2000);
  })
});
