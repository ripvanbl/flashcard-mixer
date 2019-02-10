import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { FlashcardForm } from '../../components/Flashcard/Form';
import { FlashcardList } from '../../components/Flashcard/List';
import { createFlashcardAction, fetchAllFlashcardsAction } from '../../store/actions/flashcard';
import { FLASHCARD_ITEMS_LIMIT } from '../../store/constants';

class Home extends Component {
  async componentDidMount() {
    const { fetchAllFlashcards } = this.props;

    try {
      await fetchAllFlashcards({ limit: FLASHCARD_ITEMS_LIMIT });
    } catch (err) {
      console.log(err);
    }
  }

  handleSubmit = async (values, actions) => {
    const { createFlashcard, fetchAllFlashcards } = this.props;

    try {
      await createFlashcard(values);
      await fetchAllFlashcards({ limit: FLASHCARD_ITEMS_LIMIT });
      actions.setSubmitting(false);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      flashcards: {
        isPending: flashcardsLoading,
        isFulfilled: flashcardsLoaded,
        data: flashcards 
      }
    } = this.props;
    
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Create a Flashcard
          </div>
          <div className="card-body">
            <FlashcardForm onSubmit={this.handleSubmit} />
          </div>
        </div>

        <div className="mt4">
          {flashcardsLoading && (<div>Loading...</div>)}
          {flashcardsLoaded && <FlashcardList items={flashcards} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flashcards: state.flashcards.fetchAll
});

const mapDispatchToProps = dispatch => ({
  createFlashcard: (params) => dispatch(createFlashcardAction(params)),
  fetchAllFlashcards: (params) => dispatch(fetchAllFlashcardsAction(params))
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Home);
