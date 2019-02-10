import React from 'react';
import { Flashcard } from '../index';

const FlashcardList = ({ items }) => (
  <div className="mt-5 mb-5">
    {
      (items && items.length) ? (
        <div className="d-flex justify-content-start">
          {items.map(item => (
            <Flashcard data={item} key={item.id} />
          ))}
        </div>
      )
      :
      (
        <div className="alert alert-warning" role="alert">
          There aren't any flashcards yet. Why don't you get started by adding one above?
        </div>
      )
    }
  </div>
);

export { FlashcardList }
