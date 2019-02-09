import React, { PureComponent } from 'react';

class FlashcardForm extends PureComponent {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="flashcardFormQuestion">Question</label>
          <input className="form-control" id="flashcardFormQuestion" placeholder="Enter the question" />
        </div>
        <div className="form-group">
          <label htmlFor="flashcardFormAnswer">Answer</label>
          <input className="form-control" id="flashcardFormAnswer" placeholder="Enter the answer" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export { FlashcardForm }
