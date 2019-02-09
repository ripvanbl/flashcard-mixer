import { FLASHCARD_CREATE } from './types';

export const createFlashcardAction = params => ({
  type: FLASHCARD_CREATE,
  payload: () => {
    // TODO: Add real logic ... for now, it's a gamble on whether it'll work :p
    console.log(params);
    return params;
  }
});
