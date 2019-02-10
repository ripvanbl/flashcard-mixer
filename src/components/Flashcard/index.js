import React from 'react';
import './style.scss';

const Flashcard = flashcard => (
  <div className="card flashcard" data-id={flashcard.data.id}>
    <div className="card-header text-nowrap text-truncate">
          {flashcard.data.question}
        </div>
        <div className="card-body">
        {flashcard.data.answer}
        </div>
  </div>
);

export { Flashcard }
