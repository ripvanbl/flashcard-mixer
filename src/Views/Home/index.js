import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { FlashcardForm } from '../../components/Flashcard/Form';
import { createFlashcardAction } from '../../store/actions/flashcard';

class Home extends Component {
  handleSubmit = (values, actions) => {
    this.props.createFlashcard(values);
    actions.setSubmitting(false);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Create a Flashcard
        </div>
        <div className="card-body">
          <FlashcardForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flashcard: state.flashcard
});

const mapDispatchToProps = dispatch => ({
  createFlashcard: (params) => dispatch(createFlashcardAction(params))
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Home);
